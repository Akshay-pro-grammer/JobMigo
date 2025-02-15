import { Box, Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { changepass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Notification from "../../Services/Notification";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
};

const ResetPassword = (props) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [otp, setOtp] = useState("");
    const [verified, setVerified] = useState(false);
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // ✅ Notification state variables (prefixed with "noti")
    const [notiOpen, setNotiOpen] = useState(false);
    const [notiMessage, setNotiMessage] = useState("");
    const [notiType, setNotiType] = useState("success");
    const [notiLoading, setNotiLoading] = useState(false);

    // Show notification with message and type
    const showNotification = (message, type = "success") => {
        setNotiMessage(message);
        setNotiType(type);
        setNotiOpen(true);
    };

    const handleSendOtp = () => {
        if (!email) {
            showNotification("Please enter a valid email", "error");
            return;
        }
        setOtpSending(true);
        sendOtp(email)
            .then((res) => {
                setOtpSent(true);
                showNotification(res.message, "success");
            })
            .catch((err) => {
                showNotification(err.message || "Failed to send OTP", "error");
            })
            .finally(() => {
                setOtpSending(false);
            });
    };

    const handleOtpChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) {
            setOtp(value);
        }
    };

    const handleVerifyOtp = () => {
        verifyOtp(email, otp)
            .then((res) => {
                setVerified(true);
                showNotification(res.message, "success");
            })
            .catch((err) => {
                showNotification(err.message || "OTP verification failed", "error");
            });
    };

    const resendOtp = () => {
        handleSendOtp();
    };

    const changeEmail = () => {
        setOtpSent(false);
        setEmail("");
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleResetPassword = () => {
        changepass(email, password)
            .then((res) => {
                showNotification(res.message, "success");
            })
            .catch((err) => {
                showNotification(err.message || "Failed to reset password", "error");
            });
            setPassword("");
            props.close()
    };

    return (
        <>
            <Modal open={props.open} onClose={props.close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <Typography id="modal-modal-title" variant="h5" className="font-bold text-center text-quarter-spanish-white-500">
                        Reset Password
                    </Typography>
                    <Typography id="modal-modal-description" className="mt-3 text-nile-blue-400 text-center">
                        Enter your email to receive an OTP
                    </Typography>

                    <Box className="flex flex-col gap-4 mt-5">
                        {/* Email Input */}
                        <Box>
                            <Box className="flex items-center gap-2">
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    placeholder="Enter email"
                                    type="email"
                                    fullWidth
                                    disableUnderline
                                    className="px-4 py-3 border border-nile-blue-400 rounded-md text-nile-blue-600 placeholder-nile-blue-300 focus:outline-none focus:ring-2 focus:ring-quarter-spanish-white-500"
                                />
                                <Button
                                    disabled={!email || otpSent}
                                    onClick={handleSendOtp}
                                    className="bg-quarter-spanish-white-500 text-white px-4 py-2 rounded-md hover:bg-quarter-spanish-white-700 disabled:bg-nile-blue-900 w-28"
                                >
                                    {otpSending ? "Sending..." : "Send OTP"}
                                </Button>
                            </Box>
                        </Box>

                        {/* OTP Input */}
                        {otpSent && !verified && (
                            <Box>
                                <Typography variant="body1" className="text-nile-blue-600 font-medium mb-1">
                                    Enter OTP *
                                </Typography>
                                <Input
                                    value={otp}
                                    onChange={handleOtpChange}
                                    placeholder="Enter 6-digit OTP"
                                    fullWidth
                                    className="px-4 py-3 rounded-md border border-nile-blue-400 focus:outline-none focus:ring-2 focus:ring-quarter-spanish-white-500"
                                />
                            </Box>
                        )}

                        {/* Submit Button */}
                        {otpSent && !verified && (
                            <Button
                                onClick={handleVerifyOtp}
                                disabled={otp.length !== 6}
                                className="bg-nile-blue-600 text-white px-4 py-2 rounded-md hover:bg-nile-blue-700 disabled:bg-nile-blue-400"
                                fullWidth
                            >
                                Verify OTP
                            </Button>
                        )}

                        {/* Additional Buttons */}
                        {otpSent && !verified && (
                            <div className="flex gap-2">
                                <Button onClick={resendOtp} className="bg-nile-blue-600 text-white px-4 py-2 rounded-md hover:bg-nile-blue-700" fullWidth>
                                    Resend OTP
                                </Button>
                                <Button onClick={changeEmail} className="bg-nile-blue-600 text-white px-4 py-2 rounded-md hover:bg-nile-blue-700" fullWidth>
                                    Change Email
                                </Button>
                            </div>
                        )}

                        {/* Password Input */}
                        {
                            verified && <>
                                <Box className="flex flex-col">
                                    <FormControl error={!!passError}>
                                        <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Password *</Typography>
                                        <Input
                                            value={password}
                                            onChange={(e)=>{setPassword(e.target.value);setPassError(signupValidation('password',e.target.value))}}
                                            name='password'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleTogglePassword} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            fullWidth
                                            disableUnderline
                                            required
                                            className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                                        />
                                        <FormHelperText>{passError}</FormHelperText>
                                    </FormControl>
                                </Box>
                                <Button
                                    onClick={handleResetPassword}
                                    className="bg-nile-blue-600 text-white px-4 py-2 rounded-md hover:bg-nile-blue-700 disabled:bg-nile-blue-400"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </>
                        }
                    </Box>
                </Box>
            </Modal>
            <Notification open={notiOpen} setOpen={setNotiOpen} message={notiMessage} type={notiType} loading={notiLoading} />
            {/* ✅ Notification Component */}
        </>
    );
};

export default ResetPassword;
