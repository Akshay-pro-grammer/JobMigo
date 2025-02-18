import React from 'react';
import { TextField } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Avatar, AvatarGroup } from "@mui/material";
const DreamJob = () => {
    return (
        <div className='flex items-center px-16'>
            <div className='flex flex-col w-[45%] gap-3'>
                <div className='text-6xl font-bold leading-tight text-nile-blue-200 [&>span]:text-quarter-spanish-white-400'>
                    Find Your <span>Dream </span> <span>Job</span> with us
                </div>
                <div className='text-lg text-quarter-spanish-white-200'>
                    Good Life begins with a good company start exploring 1000 of jobs in one place
                </div>
                <div className='flex items-center gap-3 mt-5'>
                    <TextField
                        className='bg-nile-blue-900 rounded-lg p-1 px-2 text-quarter-spanish-white-100 [&_input]:!text-quarter-spanish-white-100 [&_label]:!text-quarter-spanish-white-100'
                        label="Job Title"
                        variant="outlined"
                        placeholder='Software Developer'
                        fullWidth
                    />
                    <TextField
                        className='bg-nile-blue-900 rounded-lg p-1 px-2 text-quarter-spanish-white-100 [&_input]:!text-quarter-spanish-white-100 [&_label]:!text-quarter-spanish-white-100'
                        label="Job Type"
                        variant="outlined"
                        placeholder='Full Time'
                        fullWidth
                    />
                    <div className='flex items-center justify-center h-full w-20 bg-quarter-spanish-white-400 rounded-lg hover:bg-quarter-spanish-white-500'>
                        <SearchRoundedIcon className='text-quarter-spanish-white-100 cursor-pointer h-[85%] w-[85%]' fontSize='large' />
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='w-[55%] flex items-center justify-center'>
                <div className='w-[30rem] relative '>
                    <img src="/toodle.png" alt="supa" />
                    <div className=' absolute  w-fit top-[50%] right-[10%] border-quarter-spanish-white-500 rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center mb-1 text-sm text-quarter-spanish-white-100'>10k+ got Jobs</div>
                        <AvatarGroup max={3}>
                            <Avatar alt="User 1" src="./avatar.png" />
                            <Avatar alt="User 2" src="./avatar1.png" />
                            <Avatar alt="User 3" src="./avatar2.png" />
                            <Avatar alt="User 4" src="./avatar.png" />
                            <Avatar alt="User 5" src="./avatar1.png" />
                        </AvatarGroup>
                    </div>
                    <div className='absolute w-fit top-[35%] left-[5%] border-quarter-spanish-white-500 rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                        <div className='flex gap-2 items-center'>
                                <div className='w-10 h-10 p-1 bg-quarter-spanish-white-100 rounded-lg'>
                                    <img src="./Icons/Google.png" alt="" />
                                </div>
                                <div className='text-sm text-quarter-spanish-white-100'>
                                    <div>Software Engineer</div>
                                    <div className='text-quarter-spanish-white-400 text-xs'>New Delhi</div>
                                </div>
                        </div>
                        <div className='flex gap-2 justify-around text-xs text-quarter-spanish-white-200'>
                                <span>1 day ago</span>
                                <span>150 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob
