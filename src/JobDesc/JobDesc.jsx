import React from 'react';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import IconMapPin from '@mui/icons-material/LocationOn';
import IconBriefcase from '@mui/icons-material/Work';
import IconPremiumRights from '@mui/icons-material/MonetizationOn';
import IconRecharging from '@mui/icons-material/Bolt';

const JobDesc = () => {
    const card = [
        { name: "Location", icon: "IconMapPin", value: "New York" },
        { name: "Experience", icon: "IconBriefcase", value: "Expert" },
        { name: "Salary", icon: "IconPremiumRights", value: "48 LPA" },
        { name: "Job Type", icon: "IconRecharging", value: "Full Time" },
    ];

    const iconMap = {
        IconMapPin: IconMapPin,
        IconBriefcase: IconBriefcase,
        IconPremiumRights: IconPremiumRights,
        IconRecharging: IconRecharging,
    };

    return (
        <div className="w-2/3">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-nile-blue-800 rounded-xl">
                        <img className="h-14 w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">Software Engineer</div>
                        <div className="text-lg text-nile-blue-300">
                            Google &#x2022; 3 Days Ago &#x2022; 48 Applicants
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button
                            className="!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800"
                            variant="outlined"
                            fullWidth
                        >
                            Apply Now
                        </Button>
                    </Link>
                    <BookmarkBorderRoundedIcon className="text-nile-blue-300 cursor-pointer" />
                </div>
            </div>
            <Divider sx={{ my: 2 }} />
            <div className="flex justify-between">
                {card.map((item, index) => {
                    const IconComponent = iconMap[item.icon]; // Get the correct icon component dynamically
                    return (
                        <div key={index} className="flex flex-col items-center gap-1">
                            <IconButton className="!w-14 !h-14" color="primary" size="large">
                                <IconComponent style={{ fontSize: 40 }} />
                            </IconButton>
                            <div className="text-sm text-nile-blue-300">{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>
                    );
                })}
                <Divider sx={{ my: 2 }} />
                <div>
                    <div className='text-xl font-semibold mb-5'>Required Skills</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default JobDesc;
