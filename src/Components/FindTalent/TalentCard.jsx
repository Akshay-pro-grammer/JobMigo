import React, { useState } from 'react'
import { Avatar, Box, Divider, Icon, Modal, TextField, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';


const TalentCard = (props) => {
    // modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // date picker
    const [selectedDate, setSelectedDate] = useState('');

    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };
    // time picker
    const [time, setTime] = useState('10:00');
    return (<div className='bg-nile-blue-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-quarter-spanish-white-500'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-2 bg-nile-blue-800 rounded-full'>
                    <Avatar src={`/${props.image}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-lg'>{props.name}</div>
                    <div className='text-sm text-nile-blue-300'>{props.role} &#x2022; {props.company}</div>
                </div>
            </div>
            <FavoriteBorderOutlinedIcon className='text-nile-blue-300 cursor-pointer' />
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-nile-blue-800 [&>div]:text-quarter-spanish-white-400 [&>div]:rounded-lg text-xs'>
            {
                props.topSkills?.map((skill, index) => {
                    <div key={index} >{skill}</div>
                })
            }
        </div>
        <Typography
            className='!text-nile-blue-300 text-sm text-justify'
            variant="body2"
            sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3, // Number of lines to show
                textOverflow: 'ellipsis',
            }}
        >
            {props.about}
        </Typography>
        <Divider className='bg-nile-blue-800' />
        {
            props.invited ? <div className='flex gap-1 text-nile-blue-200 text-sm items-center'>
                <CalendarMonthTwoToneIcon />Interview: August 27, 2024 10:00 AM
            </div> :
                <div className='flex justify-between'>
                    <div className='font-semibold text-nile-blue-200'>
                        {props.expectedCtc}
                    </div>
                    <div className='flex gap-1 text-nile-blue-400 text-xs items-center'>
                        <LocationOnOutlinedIcon className='!h-5' /> {props.location}
                    </div>
                </div>
        }
        <Divider className='bg-nile-blue-800' />
        <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
        {
            !props.invited&&<>
            <Link to="/talent-profile">
                <Button startIcon={<AccountCircleTwoToneIcon />} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Profile</Button>
            </Link>
            <div>
                {props.posted ? <Button onClick={handleOpen} endIcon={<CalendarMonthTwoToneIcon />} className='!text-quarter-spanish-white-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Schedule</Button> : <Button className='!text-quarter-spanish-white-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Message</Button>}
            </div>
            </>
        }
        {
            props.invited&&
            <>
            <div>
                <Button  endIcon={<DoneOutlineTwoToneIcon />} className=' !text-green-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Accept</Button>
            </div>
            <div>
                <Button  endIcon={<CloseTwoToneIcon />} className='!text-red-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Reject</Button>
            </div>
            </>
        }

        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Schedule Interview
                </Typography>
                <Typography className='flex flex-col gap-4' id="modal-description" sx={{ mt: 2 }}>
                    <TextField
                        label="Select Date"
                        type="date"
                        value={selectedDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            '& input[type="date"]::-webkit-calendar-picker-indicator': {
                                filter: 'invert(1)', // Inverts the color to make it visible on dark backgrounds
                                cursor: 'pointer',
                            }
                        }}
                        fullWidth
                    />
                    <div className='flex'>
                        <label style={{ fontWeight: 'bold' }}>Select Time:</label>
                        <TimePicker
                            className={'!w-full !text-quarter-spanish-white-400 !border-quarter-spanish-white-300 '}
                            onChange={setTime}
                            value={time}
                            clearIcon={null} // Removes the clear button
                            clockIcon={null} // Removes the clock icon (optional)
                        />
                    </div>
                    <Button className='!text-quarter-spanish-white-400 !bg-black' variant="text" fullWidth>Schedule</Button>
                </Typography>
            </Box>
        </Modal>
    </div>
    )
}

export default TalentCard
