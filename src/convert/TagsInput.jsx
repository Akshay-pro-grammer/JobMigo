import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";

const TagsInput = ({ initialTags = [], editable = false, onSave }) => {
  const [tags, setTags] = useState(initialTags); // Initialize with passed skills
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setTags(initialTags); // Update tags when initialTags prop changes
  }, [initialTags]);

  const handleKeyDown = (event) => {
    if ([',', ' ', '|'].includes(event.key) && inputValue.trim() !== "") {
      event.preventDefault();
      addTag(inputValue.trim());
    }
  };

  const handleBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue.trim());
    }
  };

  const addTag = (newTag) => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setInputValue("");
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(tags); // Send updated skills back to parent
    }
  };

  return editable ? (
    <div>
      <Autocomplete
        multiple
        freeSolo
        value={tags}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={(event, newValue) => setTags(newValue)}
        options={[]} 
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={index}
              label={option}
              onDelete={() => handleDelete(option)}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Skills*"
            placeholder="Enter skill"
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        )}
      />
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={handleSave}>
        Save Skills
      </button>
    </div>
  ) : (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag, index) => (
        <Chip key={index} label={tag} className="bg-gray-200" />
      ))}
    </div>
  );
};

export default TagsInput;
