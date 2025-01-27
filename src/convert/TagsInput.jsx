import React, { useState } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";

const TagsInput = () => {
  const [tags, setTags] = useState([]); // State to hold tags
  const [inputValue, setInputValue] = useState(""); // State to hold input value

  const handleKeyDown = (event) => {
    if (
      [',', ' ', '|'].includes(event.key) && // Split characters
      inputValue.trim() !== "" // Ensure input is not empty
    ) {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]); // Add tag to list
      }
      setInputValue(""); // Clear input value
    }
  };

  const handleBlur = () => {
    const newTag = inputValue.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]); // Add tag on blur
    }
    setInputValue(""); // Clear input value
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete)); // Remove tag
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      value={tags}
      inputValue={inputValue} // Bind input value to state
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)} // Update input value
      onChange={(event, newValue) => setTags(newValue)} // Handle changes via dropdown
      options={[]} // No predefined options (custom input only)
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={index}
            label={option}
            onDelete={() => handleDelete(option)} // Delete tag
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Skills*" // Label with required indicator
          placeholder="Enter skill"
          onKeyDown={handleKeyDown} // Handle custom input
          onBlur={handleBlur} // Accept value on blur
        />
      )}
    />
  );
};

export default TagsInput;
