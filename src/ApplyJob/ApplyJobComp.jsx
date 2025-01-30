import { Alert, Backdrop, Button, CircularProgress, Divider, Snackbar, TextField } from '@mui/material';
import { MuiFileInput } from 'mui-file-input';
import React, { useState } from 'react';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Box } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import { useNavigate } from 'react-router-dom';

const ApplyJobComp = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Loading overlay state
    const navigate = useNavigate();
    
    const [file, setFile] = useState(null);
    const handleChange = (newFile) => {
        setFile(newFile);
    };
    
    const [preview, setPreview] = useState(false);
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = () => {
        
        setOpen(true);
        setLoading(true); // Show loading overlay
        startCountdown();
    };

    const startCountdown = () => {
        let countdown = 5;
        setMessage(`Application Submitted! Redirecting in ${countdown} seconds...`);

        const interval = setInterval(() => {
            countdown--;
            
            setMessage(`Application Submitted! Redirecting in ${countdown} seconds...`);

            if (countdown === 0) {
                clearInterval(interval);
                setOpen(false); // Close Snackbar
                setLoading(false); // Hide loading overlay
                navigate('/find-jobs'); // Redirect to jobs page
            }
        }, 1000);
    };

    return (
        <div className='w-2/3 mx-auto'>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-nile-blue-800 rounded-xl">
                        <img className="h-14 w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-semibold text-2xl">Software Engineer</div>
                        <div className="text-lg text-nile-blue-300">
                            Google &#x2022; 3 Days Ago &#x2022; 48 Applicants
                        </div>
                    </div>
                </div>
            </div>
            <Divider variant='middle' sx={{ my: 2 }} />
            <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextField slotProps={{ input: { readOnly: preview } }} className={preview ? "!bg-nile-blue-900" : ""} label="Full Name" variant='outlined' placeholder='Enter name' fullWidth required />
                    <TextField slotProps={{ input: { readOnly: preview } }} className={preview ? "!bg-nile-blue-900" : ""} label="Email " variant="outlined" placeholder='xyz123@gmail.com' fullWidth required />
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextField slotProps={{ input: { readOnly: preview } }} className={preview ? "!bg-nile-blue-900" : ""} label="Phone Number " variant="outlined" placeholder='with country code' fullWidth required />
                    <TextField slotProps={{ input: { readOnly: preview } }} className={preview ? "!bg-nile-blue-900" : ""} label="Portfolio link" variant="outlined" placeholder='enter url' fullWidth required />
                </div>
                <MuiFileInput
                    disabled={preview}
                    className={preview ? "!bg-nile-blue-900" : ""}
                    value={file}
                    onChange={handleChange}
                    fullWidth
                    label={
                        <Box display="flex" alignItems="center" gap={1}>
                            <AttachFileOutlinedIcon />
                            <span>Upload Resume</span>
                        </Box>
                    }
                    placeholder={file ? file.name : "No file selected"} // Show file name inside the input
                />
                <TextField slotProps={{ input: { readOnly: preview } }} className={preview ? "!bg-nile-blue-900" : ""} label="Cover Letter" variant="outlined" placeholder='Enter cover letter' fullWidth required multiline rows={3} />
                {
                    !preview &&
                    <Button onClick={handlePreview} startIcon={<RemoveRedEyeOutlinedIcon />} className='!text-quarter-spanish-white-400 !w-1/4 !mx-auto !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Preview</Button>
                }
                {
                    preview &&
                    <div className='flex gap-1 [&>*]:w-1/2'>
                        <Button onClick={handlePreview} startIcon={<ModeEditTwoToneIcon />} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Edit</Button>
                        <Button onClick={handleSubmit} startIcon={<DoneOutlineTwoToneIcon />} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Submit</Button>
                    </div>
                }
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000} // Prevents auto-close until countdown ends
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity="success">{message}</Alert>
            </Snackbar>

            {/* 🔥 Loading Overlay */}
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
                <CircularProgress color="success" />
            </Backdrop>
        </div>
    );
};

export default ApplyJobComp;
