import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Subscribe = () => {
    return (
        <div className='mt-20 flex items-center bg-nile-blue-900 mx-20 py-3 rounded-xl justify-around'>
            <div className="text-center text-4xl w-2/5 font-semibold text-nile-blue-100">
                Never want to miss any <span className="text-quarter-spanish-white-400">Job Opportunity?</span>
            </div>
            <div className='flex gap-4 bg-nile-blue-700 px-3 py-2 items-center rounded-xl'>
                <TextField className='!ml-1 !mb-2 [&_input]:text-nile-blue-100 font-semibold [&_label]:!text-nile-blue-100' 
                id="standard-basic" label="Email" variant="standard" placeholder='Your@email.com' />
                <Button
                    className='!rounded-lg'
                    variant="contained"
                    sx={{ backgroundColor: '#c7a258', color: 'white', '&:hover': { backgroundColor: '#b2904e' } }}>
                    Subscribe
                </Button>
            </div>
        </div>
    )
}

export default Subscribe
