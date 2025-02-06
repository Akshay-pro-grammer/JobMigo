import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button, Divider } from '@mui/material';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';

const Profile = (props) => {
    return (
        <div className='w-2/3'>
            {/* banner */}
            <div className='relative'>
                <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="" />
                <img className='w-48 h-48 rounded-full absolute -bottom-1/3 left-3 border-8 border-nile-blue-800' src="/avatar.png" alt="" />
            </div>
            {/* info */}
            <div className='px-3 mt-16'>
                <div className='text-3xl font-semibold flex justify-between'>{props.name} <Button className='!text-quarter-spanish-white-400 !bg-nile-blue-800 hover:!bg-nile-blue-700' variant="text" >Message</Button>
                </div>
                <div className='text-xl flex gap-1 items-center'><WorkRoundedIcon className='!h-5' /> {props.role} &bull; {props.company}</div>
                <div className='flex gap-1 text-nile-blue-300 text-lg items-center'>
                    <LocationOnOutlinedIcon className='!h-5' />{props.location}
                </div>
            </div>
            <Divider className='!my-6' variant='middle' />
            {/* about and description */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3'>About</div>
                <div className='text-sm text-nile-blue-300 text-justify'>
                    {props.about}
                </div>
            </div>
            <Divider className='!my-6' variant='middle' />
            {/* Skills */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3'>Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        props.skills?.map((skill, index) => <div key={index} className='bg-quarter-spanish-white-300 text-sm font-medium bg-opacity-15 rounded-3xl text-quarter-spanish-white-400 px-3 py-1'>{skill}</div>)
                    }
                </div>
            </div>
            <Divider className='!my-6' variant='middle' />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5'>Experience</div>
                <div className='flex flex-col gap-8'>
                    {
                        props.experience?.map((exp, index) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider className='!my-6' variant='middle' />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5'>Certifications</div>
                <div className='flex flex-col gap-8'>
                    {
                        props.certifications?.map((certi, index) => <CertiCard key={index} {...certi} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
