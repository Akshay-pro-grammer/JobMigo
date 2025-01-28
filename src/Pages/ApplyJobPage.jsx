import { Button } from '@mui/material'
import React from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom'
import ApplyJobComp from '../ApplyJob/ApplyJobComp';

const ApplyJobPage = () => {
    
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] p-4">
             <Link className='my-4 inline-block' to="/jobs">
                <Button startIcon={<ArrowBackSharpIcon/>} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Go Back</Button>
            </Link>
            <ApplyJobComp/>
    </div>
  )
}

export default ApplyJobPage
