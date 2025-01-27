import React from 'react'
import SelectInput from './SelectInput';
import TagsInput from '../convert/TagsInput';
import Editor from './Editor';
import { Button } from '@mui/material';


const PostJob = () => {
  const fields = [
    { label: "Job Title", placeholder: "Enter Job Title", options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { label: "Company", placeholder: "Enter Company Name", options: ['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'] },
    { label: "Experience", placeholder: "Enter Experience Level", options: ['Entry Level', 'Intermediate', 'Expert'] },
    { label: "Job Type", placeholder: "Enter Job Type", options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] },
    { label: "Location", placeholder: "Enter Job Location", options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { label: "Salary", placeholder: "Enter Salary", options: ['10 LPA', '15 LPA', '20 LPA', '25 LPA', '30 LPA', '35 LPA', '40 LPA', '45 LPA'] }
  ]
  const select = fields;
  return (
    <div className='w-4/5 mx-auto'>
      <div className='text-2xl font-semibold mb-5'>Post a Job</div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput />
        <div>
          <div className='text-sm font-medium'>Job Description</div>
          <Editor />
        </div>
        <div className='flex gap-4'>
          <Button className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Publish Job</Button>
          <Button className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Save As Draft</Button>
        </div>
      </div>
    </div>
  )
}

export default PostJob
