import { Divider } from '@mui/material'
import React from 'react'
import SearchBar from '../Components/FindTalent/SearchBar'
import Talents from '../Components/FindTalent/Talents'

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins']">
            <SearchBar/>
            <Divider variant='middle'/>
            <Talents/>
    </div>
  )
}

export default FindTalent
