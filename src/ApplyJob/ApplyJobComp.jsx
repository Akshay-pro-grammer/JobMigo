import { Button, Divider, TextField } from '@mui/material'
import { MuiFileInput } from 'mui-file-input'
import React, { useState } from 'react'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Box } from "@mui/material";


const ApplyJobComp = () => {
    const [file, setFile] = useState(null);

    // Function to handle file changes
    const handleChange = (newFile) => {
        setFile(newFile); // Update state with the selected file
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
                    <TextField label="Full Name " variant="outlined" placeholder='Enter name' fullWidth required />
                    <TextField label="Email " variant="outlined" placeholder='xyz123@gmail.com' fullWidth required />
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextField label="Phone Number " variant="outlined" placeholder='with country code' fullWidth required />
                    <TextField label="Portfolio link" variant="outlined" placeholder='enter url' fullWidth required />
                </div>
                <MuiFileInput
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
                <TextField label="Cover Letter" variant="outlined" placeholder='Enter cover letter' fullWidth required multiline rows={3} />
                <Button startIcon={<ArrowBackSharpIcon/>} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Preview</Button>
            </div>
        </div>
    )
}

export default ApplyJobComp
