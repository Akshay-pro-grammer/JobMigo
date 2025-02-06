import { Avatar, AvatarGroup, Button, Divider, Tab, Tabs, Box } from '@mui/material';
import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import AboutComp from './AboutComp';
import CompanyJobs from './CompanyJobs';
import CompanyEmployees from './CompanyEmployees';

const Company = () => {
    // State to track selected tab
    const [tabIndex, setTabIndex] = useState(0);

    // Handle tab change
    const handleChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <div className='w-3/4'>
            {/* Banner and Company Logo */}
            <div className='relative'>
                <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="Banner" />
                <img
                    className='w-36 h-36 rounded-3xl absolute -bottom-1/4 p-2 left-5 border-8 border-nile-blue-800 bg-nile-blue-800'
                    src="/Icons/Google.png" alt="Company Logo"
                />
            </div>

            {/* Company Info */}
            <div className='px-3 mt-12'>
                <div className='text-3xl font-semibold flex justify-between'>
                    Google
                    <AvatarGroup max={3}>
                        <Avatar alt="User 1" src="./avatar.png" />
                        <Avatar alt="User 2" src="./avatar1.png" />
                        <Avatar alt="User 3" src="./avatar2.png" />
                        <Avatar alt="User 4" src="./avatar.png" />
                        <Avatar alt="User 5" src="./avatar1.png" />
                    </AvatarGroup>
                </div>
                <div className='flex gap-1 text-nile-blue-300 text-lg items-center'>
                    <LocationOnOutlinedIcon className='!h-5' /> New York, United States
                </div>
                <Divider className='!my-6' variant='middle' />

                {/* Tabs Section */}
                <Box>
                    <Tabs
                        value={tabIndex}
                        onChange={handleChange}
                        variant="fullWidth"
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        <Tab label={
                            <div className='flex gap-2 items-center'>
                                <InfoTwoToneIcon />
                                <span>Overview</span>
                            </div>
                        } />
                        <Tab label={
                            <div className='flex gap-2 items-center'>
                                <WorkOutlineTwoToneIcon />
                                <span>Jobs</span>
                            </div>
                        } />
                        <Tab label={
                            <div className='flex gap-2 items-center'>
                                <PeopleAltTwoToneIcon />
                                <span>Employees</span>
                            </div>
                        } />
                    </Tabs>
                </Box>

                {/* Tab Content */}
                <Box className="mt-4">
                    {tabIndex === 0 && (
                        <div>
                            <AboutComp/>
                        </div>
                    )}
                    {tabIndex === 1 && (
                        <div>
                           <CompanyJobs/>
                        </div>
                    )}
                    {tabIndex === 2 && (
                        <div>
                            <CompanyEmployees/>
                        </div>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default Company;
