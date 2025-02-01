import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import PostedJobCard from './PostedJobCard';

const PostedJob = () => {
    const activeJobs=[
        {
          "jobTitle": "Frontend Developer",
          "location": "San Francisco, USA",
          "posted": "5 days ago"
        },
        {
          "jobTitle": "Backend Engineer",
          "location": "London, UK",
          "posted": "2 days ago"
        },
        {
          "jobTitle": "Full Stack Developer",
          "location": "Sydney, Australia",
          "posted": "7 days ago"
        },
        {
          "jobTitle": "UI/UX Designer",
          "location": "Toronto, Canada",
          "posted": "1 day ago"
        },
        {
          "jobTitle": "DevOps Engineer",
          "location": "Berlin, Germany",
          "posted": "4 days ago"
        },
        {
          "jobTitle": "Mobile App Developer",
          "location": "Austin, USA",
          "posted": "8 days ago"
        },
        {
          "jobTitle": "Data Analyst",
          "location": "Mumbai, India",
          "posted": "6 days ago"
        },
        {
          "jobTitle": "Cloud Architect",
          "location": "Dublin, Ireland",
          "posted": "3 days ago"
        },
        {
          "jobTitle": "Software Engineer",
          "location": "Tokyo, Japan",
          "posted": "9 days ago"
        },
        {
          "jobTitle": "Cybersecurity Specialist",
          "location": "Paris, France",
          "posted": "10 days ago"
        }
      ]
    const [tabIndex, setTabIndex] = useState(0);

    // Handle tab change
    const handleChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };
    return (<div className='w-1/6 mt-5'>
        <div className='text-2xl font-semibold mb-5'>Jobs</div>
        <div>
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
                            
                            <span>Active</span>
                        </div>
                    } />
                    <Tab label={
                        <div className='flex gap-2 items-center'>
                            
                            <span>Drafts</span>
                        </div>
                    } />
                </Tabs>
            </Box>

            {/* Tab Content */}
            <Box className="mt-4">
                {tabIndex === 0 && (
                    <div className='flex flex-col gap-5 mt-5'>
                       {
                        activeJobs.map((job, index) => <PostedJobCard key={index} {...job} />)
                       }
                    </div>
                )}
                {tabIndex === 1 && (
                    <div>
                        s
                    </div>
                )}
            </Box>
        </div>
    </div>
    )
}

export default PostedJob
