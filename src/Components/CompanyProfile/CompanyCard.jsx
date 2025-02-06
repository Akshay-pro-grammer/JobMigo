import { IconButton } from '@mui/material'
import React from 'react'
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';

const CompanyCard = (props) => {
    return (
        <div>
            <div className='flex justify-between items-center rounded-lg p-2 bg-nile-blue-900 hover:bg-neutral-700'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-nile-blue-800 rounded-md'>
                        <img className='h-7 w-7' src={`/Icons/${props.name}.png`} alt="" />
                    </div>
                    <div>
                        <div className='font-semibold'>{props.name}</div>
                        <div className='text-xs text-nile-blue-300'>{props.employees} Employees </div>
                    </div>
                </div>

                <IconButton size="small" className='!text-quarter-spanish-white-100'>
                    <LaunchTwoToneIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default CompanyCard
