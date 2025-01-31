import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Company from '../CompanyProfile/Company';
import SimilarCompanies from '../CompanyProfile/SimilarCompanies';

const CompanyPage = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] p-4">
    
        <Button sx={{my:2}} onClick={()=>navigate(-1)} startIcon={<ArrowBackSharpIcon/>} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" >Go Back</Button>
    
    {/* <Divider variant='middle'/> */}
    <div className='flex gap-5 justify-between'>
        <Company/>
        <SimilarCompanies/>
    </div>
</div>
  )
}

export default CompanyPage
