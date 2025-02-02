import { Box, Button, Input, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
            <div className='font-2xl font-semibold'>Create Account</div>

            <Box className="flex flex-col gap-5">
                {/* Full Name */}
                <Box className="flex flex-col">
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Full Name *</Typography>
                    <Input
                        placeholder="Enter name"
                        type="text"
                        fullWidth
                        disableUnderline
                        className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                    />
                </Box>

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

                {/* Password */}
                <Box className="flex flex-col">
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Password *</Typography>
                    <Input
                        placeholder="Enter password"
                        type='password'
                        fullWidth
                        disableUnderline
                        required
                        className="px-4 py-3 border border-nile-blue-300 rounded-lg text-nile-blue-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nile-blue-500"
                    />
                </Box>

                {/* Confirm Password */}
                <Box className="flex flex-col">
                    <Typography variant="body1" className="text-quarter-spanish-white-200 font-semibold mb-2">Confirm Password *</Typography>
                    <Input
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
                </Box>

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
                    variant="contained"
                    className="bg-nile-blue-500 hover:bg-nile-blue-600 text-white font-semibold py-3 rounded-lg mt-4"
                    fullWidth
                >
                    Sign Up
                </Button>
                <div className='mx-auto'>Have an account? <Link to={'/login'}className='text-quarter-spanish-white-400 hover:underline' >Login </Link></div>
            </Box>

        </div>
    )
}

export default SignUp
