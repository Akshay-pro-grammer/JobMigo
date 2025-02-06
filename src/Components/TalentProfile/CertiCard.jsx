import React from 'react'
const CertiCard = (props) => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-2 bg-nile-blue-800 rounded-md'>
                    <img className='h-7 w-7' src={`/Icons/${props.issuer}.png`} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='font-semibold'>{props.name}</div>
                    <div className='text-sm text-nile-blue-300'>{props.issuer} </div>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='text-sm text-nile-blue-300'>{props.issueDate}</div>
                <div className='text-sm text-nile-blue-300'>ID : {props.certificateId}</div>
            </div>
        </div>

    )
}

export default CertiCard
