import { Divider } from '@mui/material'
import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SignUp from '../SignUpLogin/SignUp';
import Login from '../SignUpLogin/Login';
import { useLocation } from 'react-router-dom';

const SignUpPage = () => {
    const location=useLocation();
    return (
        <div className='min-h-[100vh] bg-nile-blue-800 font-["poppins"] overflow-hidden'>
            <div className={`w-[100vw] h-[100vh] flex transition-all ease-in-out duration-1000 [&>*]:flex-shrink-0 ${location.pathname==="/signup"?"-translate-x-1/2":"translate-x-0"}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname==="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-nile-blue-900 flex items-center gap-5 justify-center flex-col`}>
                    <div className="flex gap-2 items-center text-quarter-spanish-white-400">
                        <BusinessCenterOutlinedIcon className="!h-16 !w-16" />
                        <div className="text-6xl font-semibold">JobMigo</div>
                    </div>
                    <div className='text-2xl font-semibold mb-3 text-nile-blue-400'>
                        Find The Job Made for you
                    </div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage
