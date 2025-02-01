import { Divider } from '@mui/material'
import React from 'react'
import JobHistory from '../JobHistory/JobHistory'

const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] px-4">
        
        <Divider variant='middle'/>
        <div className='my-5'>
            <JobHistory/>
        </div>
    </div>
  )
}

export default JobHistoryPage
