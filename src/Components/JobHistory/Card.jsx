import React from 'react'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Button, Divider, Typography } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import { Link } from 'react-router-dom';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
const Card = (props) => {
    
    return (<Link to="/jobs" className='bg-nile-blue-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-quarter-spanish-white-500'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-2 bg-nile-blue-800 rounded-md'>
                    <img className='h-7 w-7' src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.jobTitle}</div>
                    <div className='text-xs text-nile-blue-300'>{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            {props.saved?
            <BookmarkRoundedIcon className='text-quarter-spanish-white-300 cursor-pointer' />
            :
            <BookmarkBorderRoundedIcon className='text-quarter-spanish-white-400 cursor-pointer' />
            }
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-nile-blue-800 [&>div]:text-quarter-spanish-white-400 [&>div]:rounded-lg text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
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
            {props.description}
        </Typography>
        <Divider className='bg-nile-blue-800' />
        <div className='flex justify-between'>
            <div className='font-semibold text-nile-blue-200'>
                &#8377;{props.package}
            </div>
            <div className='flex gap-1 text-nile-blue-400 text-xs items-center'>
            <AccessAlarmRoundedIcon className='!h-5'/>{props.applied|| props.interviewing?"Applied":props.offered?"Interviewed":"Posted"} {props.postedDaysAgo} days ago
            </div>
        </div>
        {
            (props.offered || props.interviewing)&&
            <Divider className='bg-nile-blue-800' />
        }
        {
            props.offered&&
           <div className='flex gap-2'>
           <Button  endIcon={<DoneOutlineTwoToneIcon />} className=' !text-green-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Accept</Button>
           <Button  endIcon={<CloseTwoToneIcon />} className='!text-red-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Reject</Button>
       </div>
        }
        {
             props.interviewing && <div className='flex gap-1 text-sm items-center'>
             <CalendarMonthTwoToneIcon />Sun, 25 August &#x2022; <span className='text-nile-blue-300'>10:00 AM</span>
         </div>
        }
    </Link>
    )
}

export default Card
