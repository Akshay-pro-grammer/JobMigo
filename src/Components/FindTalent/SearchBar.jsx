import React from 'react'
import MultiInput from '../FindJobs/MultiInput'
import Slider from '@mui/material/Slider';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Input } from '@mui/material';


function valuetext(value) {
    return `₹{value}`;
}

const SearchBar = () => {
    const searchFields=[
        { title: "Job Title", icon: "IconSearch", options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
        { title: "Location", icon: "IconMapPin", options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
        { title: "Skills", icon: "IconRecharging", options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
    ]

    const handleValueChange = (newValues) => {
        console.log("Selected Values:", newValues);
    };
    //range slider
    const [value, setValue] = React.useState([1, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        // search bar
        <div className="flex px-5 py-8 items-center">
            <div className='flex items-center'>
                <div className='text-quarter-spanish-white-400 bg-nile-blue-900 rounded-full p-1 mr-2'><AccountCircleOutlinedIcon /></div> 
                <Input  className='bg-nile-blue-900 rounded-lg p-1 px-2 text-quarter-spanish-white-100 [&_input]:!text-quarter-spanish-white-100 [&_label]:!text-quarter-spanish-white-100' placeholder="Talent Name" />
            </div>
            {
                searchFields.map((item, index) => (
                    <>
                        <div className='w-1/5 ml-1' key={index}>
                            <MultiInput  options={item.options} label={item.title} onValueChange={handleValueChange} />
                        </div>
                        {/* <Divider className='!mr-1' orientation="vertical" flexItem /> */}
                    </>
                ))
            }
            {/* slider */}
            <div className='w-1/5 ml-1 flex flex-col items-center justify-center !mx-2'>
                <div className='flex text-sm justify-between'>
                    <div>Salary</div>
                    <div>₹{value[0]} LPA - ₹{value[1]} LPA</div>
                </div>
                <Slider
                    style={{ color: '#c7a258' }}
                    getAriaLabel={() => 'LPA Range'}
                    value={value}
                    size='small'
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    getAriaValueText={valuetext}
                />
            </div>
        </div>
    )
}

export default SearchBar
