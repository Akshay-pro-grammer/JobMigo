import React from 'react'
import { Avatar, Divider, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const TalentCard = (props) => {
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
                props.topSkills?.map((skill,index)=>{
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
        <div className='flex justify-between'>
            <div className='font-semibold text-nile-blue-200'>
                {props.expectedCtc}
            </div>
            <div className='flex gap-1 text-nile-blue-400 text-xs items-center'>
                <LocationOnOutlinedIcon className='!h-5' /> {props.location}
            </div>
        </div>
        <Divider className='bg-nile-blue-800' />
        <div className='flex [&>*]:w-1/2 [&>*]:p-1'>
            <Link to="/talent-profile">
                <Button className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Profile</Button>
            </Link>
            <div>
                <Button className='!text-quarter-spanish-white-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" fullWidth>Message</Button>
            </div>
        </div>
    </div>
    )
}

export default TalentCard
