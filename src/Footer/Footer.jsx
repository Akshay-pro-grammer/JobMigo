import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AlignVerticalTopOutlinedIcon from '@mui/icons-material/AlignVerticalTopOutlined';
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
const Footer = () => {
    const footerLinks = [
        { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
        { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
        { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }

    ]
    return (<div className='pt-20 pb-5 flex gap-5 justify-around bg-nile-blue-800 font-["poppins"]'>
        <div className='w-1/4 flex flex-col gap-4'>
            <div className="flex gap-2 items-center text-quarter-spanish-white-400">
                <BusinessCenterOutlinedIcon />
                <div className="text-xl font-semibold">JobMigo</div>
            </div>
            <div className='text-sm text-nile-blue-300'>
                Job portal with user profiles , skill updates , Certificates, work experience and admin job posting.
            </div>
            <div className='flex gap-3 text-quarter-spanish-white-400 [&>div]:bg-nile-blue-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-nile-blue-700'>
                <div><FacebookRoundedIcon /></div>
                <div><CameraAltOutlinedIcon /></div>
                <div><AlignVerticalTopOutlinedIcon /></div>
            </div>
        </div>
        {
            footerLinks.map((item, index) => <div key={index}>
                <div className='text-lg font-semibold mb-4 text-quarter-spanish-white-400'>{item.title}</div>
                {
                    item.links.map((link, index) => <div key={index} className='text-nile-blue-300 text-sm hover:text-quarter-spanish-white-400 
                    cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out'>
                        {link}
                    </div>)
                }
            </div>)
        }
    </div>
    )
}

export default Footer
