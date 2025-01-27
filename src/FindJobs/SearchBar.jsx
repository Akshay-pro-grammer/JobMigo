import React from 'react'
import MultiInput from './MultiInput'
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `₹{value}`;
}

const SearchBar = () => {
    const dropdownData = [
        { title: "Job Title", icon: "SavedSearchOutlinedIcon", options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
        { title: "Location", icon: "WorkOutlineOutlinedIcon", options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
        { title: "Experience", icon: "LocationOnOutlinedIcon", options: ['Entry Level', 'Intermediate', 'Expert'] },
        { title: "Job Type", icon: "DateRangeOutlinedIcon", options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
    ];

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
        <div className="flex px-5 py-8">
            {
                dropdownData.map((item, index) => (
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
                    getAriaLabel={() => 'Salary Range'}
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
