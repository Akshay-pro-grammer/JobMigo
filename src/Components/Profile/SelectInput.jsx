import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SelectInput = (props) => {
    useEffect(() => {
      setValue(props.value);  
    },[])
  const [value, setValue] = useState(null); // Single value state

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update selected value
  };

  return (
    <Autocomplete
    aria-required
      freeSolo
      options={props.options} // Accept options from props
      value={value} // Selected value
      onChange={handleChange} // Update value on selection
      renderInput={(params) => (
        <TextField
        {...params}
          variant="outlined"
          placeholder={props.placeholder}
          label={
            <div className="text-quarter-spanish-white-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {props.label} *
            </div>
          }
        />
      )}
    />
  );
};

export default SelectInput;
