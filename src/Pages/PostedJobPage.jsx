import { Divider } from '@mui/material'
import React from 'react'
import PostedJob from '../Components/PostedJob/PostedJob'
import PostedJobDesc from '../Components/PostedJob/PostedJobDesc'

const PostedJobPage = () => {
    return (
        <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] px-4">
        
        <Divider variant='middle'/>
        <div className='flex gap-5 '>
            <PostedJob/>
            <PostedJobDesc/>
        </div>
    </div>
      )
}

export default PostedJobPage
