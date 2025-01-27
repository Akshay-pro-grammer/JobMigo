import React from 'react'
import Avatar from "@mui/material/Avatar";

const Working = () => {
    const work = [
        {
            "name": "Build your resume",
            "desc": "Create a standout resume with your skills."
        },
        {
            "name": "Apply for job",
            "desc": "Find and apply for jobs that match your skills."
        },
        {
            "name": "Get hired",
            "desc": "Connect with employers and start your new job."
        }
    ]
    return (
        <div className="mt-20 pb-5">
            <div className="text-center text-4xl font-semibold mb-3 text-nile-blue-100">
                How it <span className="text-quarter-spanish-white-400">Works</span> ?
            </div>
            <div className="text-lg text-nile-blue-300 text-center w-3/4 md:w-1/2 mx-auto">
                Effortlessly navigate through the process and land your dream job .
            </div>
            <div className='flex px-16 justify-between items-center'>
                <div className='relative'>
                    <img className='w-[30rem]' src="/jobsense.png" alt="" />
                    <div className='top-[50%] left-[4%] absolute w-36 flex flex-col items-center gap-1 border border-quarter-spanish-white-400 rounded-xl py-3 px-1 backdrop-blur-md'>
                        <Avatar className='!h-16 !w-16' alt="User Avatar" src="avatar.png" sx={{ width: 40, height: 40 }} />
                        <div className='text-sm font-semibold text-nile-blue-100 text-center'>Complete your profile</div>
                        <div className='text-xs font-semibold text-nile-blue-200 text-center'>Almost Completed</div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    {
                        work.map((item, index) =>
                            <div className='flex items-center gap-4'>
                                <div className='p-2.5 bg-quarter-spanish-white-300 rounded-full'>
                                    <img className='h-12 w-12' src={`/Working/${item.name}.png`} alt="" />
                                </div>
                                <div>
                                    <div className='text-nile-blue-200 text-xl font-semibold'>{item.name}</div>
                                    <div className='text-nile-blue-300 text-sm'>{item.desc}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Working
