import React from 'react'

const PostedJobCard = (props) => {
  return (
    <div className='bg-nile-blue-900 rounded-xl p-2 border-l-2 border-l-quarter-spanish-white-400'>
      <div className='text-sm text-nile-blue-300 font-semibold'>{props.jobTitle}</div>
      <div className='text-xs text-nile-blue-300 font-medium'>{props.location}</div>
      <div className='text-xs text-nile-blue-300'>{props.posted}</div>
    </div>
  )
}

export default PostedJobCard
