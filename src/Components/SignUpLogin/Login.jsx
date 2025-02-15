import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Backdrop, Box, Button, CircularProgress, FormControl, FormHelperText, IconButton, Input, InputAdornment, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Services/UserService';
import { loginValidation } from '../../Services/FormValidation';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ResetPassword from './ResetPassword';

const form = {
    email: "",
    password: ""
}
const Login = () => {
    const [open, setOpen] = useState(false);
        const [message, setMessage] = useState("");
        const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formError, setFormError] = useState(form);

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const [data, setData] = useState(form);
    const handleChange = (e) => {
        console.log(e.target);
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        let valid = true, newFormError = {};
        for (let key in data) {
            
                newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if(valid){
            setLoading(true);
            loginUser(data)
            .then(res => {
                setLoading(false); // Hide loading spinner
                setMessage("Login successful! Redirecting to Homepage...");
                setOpen(true); // Show snackbar

                // Navigate to login after 5 seconds
                setTimeout(() => {
                    navigate("/homepage");
                }, 5000);
            })
            .catch(err => {
                setLoading(false); // Hide loading spinner
                setMessage("Login failed! Please try again.");
                setOpen(true); // Show snackbar
            });
        }
    }
    // forgot password
    const [openReset, setOpenReset] = useState(false);
    const handleOpenReset = () => setOpenReset(true);
    const handleCloseReset = () => setOpenReset(false);
    return (
        <>
        <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
        <Button onClick={() => navigate("/homepage")} startIcon={<ArrowBackSharpIcon/>} className='w-24 !text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" >Home</Button>
            <div className='font-2xl font-semibold'>Create Account</div>

            <Box className="flex flex-col gap-3">
                {/* Email */}
                <Box className="flex flex-col">
                <FormControl error={!!formError.email}>
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Email *</Typography>
                    <Input
                    value={data.email}
                    onChange={handleChange}
                        name='email'
                        placeholder="Enter email"
                        type="email"
                        fullWidth
                        disableUnderline
                        className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                    />
                    <FormHelperText>{formError.email}</FormHelperText>
                    </FormControl>
                </Box>

                {/* Confirm Password */}
                <Box className="flex flex-col">
                <FormControl error={!!formError.password}>
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Password *</Typography>
                    <Input
                    value={data.password}
                    onChange={handleChange}
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
                    <FormHelperText>{formError.password}</FormHelperText>
                    </FormControl>
                </Box>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    className="bg-nile-blue-500 hover:bg-nile-blue-600 text-white font-semibold py-3 rounded-lg mt-4"
                    fullWidth
                >
                    Login
                </Button>
                <div className='mx-auto'>Don't have an account? <Link to={'/signup'} className='text-quarter-spanish-white-400 hover:underline' >Sign-up </Link></div>
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
            {/* forget password link */}
            <div onClick={handleOpenReset} className='hover:underline text-quarter-spanish-white-400 cursor-pointer text-center'>
                Forget Password
            </div>
        </div>
        <ResetPassword open={openReset} close={handleCloseReset} />
        </>
    )
}

export default Login
