import { Box, Button, Input, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, FormHelperText, Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Link, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import { registerUser } from '../../Services/UserService';
import { signupValidation } from '../../Services/FormValidation';


const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}

const SignUp = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);
    const handleChange = (e) => {
        console.log(e.target);
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signupValidation(name, value) });
        if (name == "password" && data.confirmPassword != "") {
            if (data.confirmPassword !== value) {
                setFormError({ ...formError, confirmPassword: "Password does not match." });
            } else {
                setFormError({ ...formError, confirmPassword: "" });
            }
        }
        if (name === "confirmPassword") {
            if (value !== data.password) {
                setFormError({ ...formError, [name]: "Password does not match." });
            } else {
                setFormError({ ...formError, confirmPassword: "" });
            }
        }
    }
    
    const handleSubmit = () => {
        let valid = true, newFormError = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") {
                newFormError[key] = signupValidation(key, data[key]);
            } else if (data[key] !== data["password"]) {
                newFormError[key] = "Password does not match.";
            }
            if (newFormError[key]) valid = false;
        }
    
        setFormError(newFormError);
    
        if (valid) {
            setLoading(true); // Show loading spinner
            registerUser(data)
                .then(res => {
                    setLoading(false); // Hide loading spinner
                    setMessage("Signup successful! Redirecting to Login...");
                    setOpen(true); // Show snackbar
    
                    // Navigate to login after 5 seconds
                    setTimeout(() => {
                        navigate("/login");
                    }, 5000);
                })
                .catch(err => {
                    setLoading(false); // Hide loading spinner
                    setMessage("Signup failed! Please try again.");
                    setOpen(true); // Show snackbar
                });
        }
    };
    

    return (
        <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
            <div className='font-2xl font-semibold'>Create Account</div>

            <Box className="flex flex-col gap-5">
                {/* Full Name */}
                <Box className="flex flex-col">
                    <FormControl error={!!formError.name}>
                        <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Full Name *</Typography>
                        <Input
                            name='name'
                            placeholder="Enter name"
                            type="text"
                            value={data.name}
                            onChange={handleChange}
                            fullWidth
                            disableUnderline
                            className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                        />
                        <FormHelperText>{formError.name}</FormHelperText>
                    </FormControl>
                </Box>

                {/* Email */}
                <Box className="flex flex-col">
                    <FormControl error={!!formError.email}>
                        <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Email *</Typography>
                        <Input
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            type="email"
                            fullWidth
                            disableUnderline
                            className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                        />
                        <FormHelperText>{formError.email}</FormHelperText>
                    </FormControl>
                </Box>

                {/* Password */}
                <Box className="flex flex-col">
                    <FormControl error={!!formError.password}>
                        <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Password *</Typography>
                        <Input
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            type='password'
                            fullWidth
                            disableUnderline
                            required
                            className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                        />
                        <FormHelperText>{formError.password}</FormHelperText>
                    </FormControl>
                </Box>

                {/* Confirm Password */}
                <Box className="flex flex-col">
                    <FormControl error={!!formError.confirmPassword}>
                        <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Confirm Password *</Typography>
                        <Input
                            name='confirmPassword'
                            value={data.confirmPassword}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder="Confirm password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            disableUnderline
                            required
                            className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                        />
                        <FormHelperText>{formError.confirmPassword}</FormHelperText>
                    </FormControl>
                </Box>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">You are?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="accountType"
                        defaultValue={"APPLICANT"}
                        value={data.accountType}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="APPLICANT" control={<Radio />} label="Applicant" />
                        <FormControlLabel value="EMPLOYER" control={<Radio />} label="Employer" />
                    </RadioGroup>
                </FormControl>

                {/* Checkbox */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}

                        />
                    }
                    label={
                        <Typography variant="body2" className="text-quarter-spanish-white-200">
                            I Agree to the <span className="text-nile-blue-400">Terms & Conditions</span>
                        </Typography>
                    }
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    className="bg-nile-blue-500 hover:bg-nile-blue-600 text-white font-semibold py-3 rounded-lg mt-4"
                    fullWidth
                >
                    Sign Up
                </Button>
                <div className='mx-auto'>Have an account? <Link to={'/login'} className='text-quarter-spanish-white-400 hover:underline' >Login </Link></div>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={4000} // Snackbar disappears after 4 seconds
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity="success" onClose={() => setOpen(false)}>
                    {message}
                </Alert>
            </Snackbar>

            {/* Loading Overlay */}
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
                <CircularProgress color="success" />
            </Backdrop>

        </div>
    )
}

export default SignUp
