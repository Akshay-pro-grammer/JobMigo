import React from 'react'
import Avatar from "@mui/material/Avatar";
import Rating from '@mui/material/Rating';

const Testimonials = () => {
    const testimonials = [
        {
            "name": "Shivam Patel",
            "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
            "rating": 5
        },
        {
            "name": "Abhishek Kullu",
            "testimonial": "Found my dream job within a week! The application process was smooth.",
            "rating": 5
        },
        {
            "name": "Swapnil Pandey",
            "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
            "rating": 3.5
        },
        {
            "name": "Pavan Barnana",
            "testimonial": "Highly efficient job portal with excellent resources. Helped me land a great position.",
            "rating": 4
        }
    ]
    return (
        <div className="mt-20 pb-5">
            {/* Header */}
            <div className="text-center text-4xl font-semibold mb-3 text-nile-blue-100">
                What <span className="text-quarter-spanish-white-400">User</span> says about us?</div>
            <div className='flex justify-evenly'>
                {
                    testimonials.map((data, index) =>
                        <div key={index} className='flex flex-col gap-3 w-[23%] border border-quarter-spanish-white-400 rounded-xl p-5 mt-10'>
                            {/* user */}
                            <div className='flex gap-2 items-center'>
                                <Avatar className='!h-14 !w-14' alt="User Avatar" src="avatar.png" sx={{ width: 40, height: 40 }} />
                                <div>
                                    <div className='text-lg text-nile-blue-100 font-semibold'>{data.name}</div>
                                    <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
                                </div>
                            </div>
                            {/* desc */}
                            <div className='text-xs text-nile-blue-300'>{data.testimonial}</div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Testimonials
