import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControlLabel, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
            <div className='font-2xl font-semibold'>Create Account</div>

            <Box className="flex flex-col gap-5">
                {/* Email */}
                <Box className="flex flex-col">
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Email *</Typography>
                    <Input
                        placeholder="Enter email"
                        type="email"
                        fullWidth
                        disableUnderline
                        className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                    />
                </Box>

                {/* Confirm Password */}
                <Box className="flex flex-col">
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Password *</Typography>
                    <Input
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
                </Box>
                <Button
                    variant="contained"
                    className="bg-nile-blue-500 hover:bg-nile-blue-600 text-white font-semibold py-3 rounded-lg mt-4"
                    fullWidth
                >
                    Login
                </Button>
                <div className='mx-auto'>Don't have an account? <Link to={'/signup'} className='text-quarter-spanish-white-400 hover:underline' >Sign-up </Link></div>
            </Box>

        </div>
    )
}

export default Login
