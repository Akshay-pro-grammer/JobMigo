import React from 'react'
import Divider from '@mui/material/Divider';
import SearchBar from '../Components/FindJobs/SearchBar';
import Jobs from '../Components/FindJobs/Jobs';


const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins']">
            <SearchBar/>
            <Divider variant='middle'/>
            <Jobs/>
        </div>
  )
}

export default FindJobs
