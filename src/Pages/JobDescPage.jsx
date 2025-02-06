import { Button } from '@mui/material'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import React from 'react'
import { Link } from 'react-router-dom'
import JobDesc from '../Components/JobDesc/JobDesc';
import RecJob from '../Components/JobDesc/RecJob';

const JobDescPage = () => {
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] p-4">
            <Link className='my-4 inline-block' to="/find-Jobs">
                <Button startIcon={<ArrowBackSharpIcon/>} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Go Back</Button>
            </Link>
            {/* <Divider variant='middle'/> */}
            <div className='flex gap-5 justify-around'>
                <JobDesc/>
                <RecJob/>
            </div>
    </div>
  )
}

export default JobDescPage
