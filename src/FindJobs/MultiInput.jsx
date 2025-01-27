// src/components/MultiInput.jsx
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const MultiInput = ({ options: initialOptions, label, onValueChange }) => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(initialOptions);

  const handleChange = (event, newValue) => {
    // Add any new custom values to the options list
    const newOptions = [...options];
    newValue.forEach((item) => {
      if (!newOptions.includes(item)) {
        newOptions.push(item);
      }
    });
    setOptions(newOptions); // Update available options
    setValue(newValue); // Update selected values

    // Notify parent component about the value change
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <Autocomplete
      multiple
      freeSolo // Allow creating new values
      options={options} // Dropdown options
      value={value} // Selected values
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            label={option}
            {...getTagProps({ index })}
            color="primary"
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={
            <div className="text-quarter-spanish-white-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <WorkOutlineOutlinedIcon/>
              {label}
            </div>
          }
        />
      )}
    />
  );
};

export default MultiInput;
