import React, { useState } from 'react';
import { Button, Popper, ClickAwayListener, Box, Typography, List, ListItem, ListItemButton, IconButton } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

const opt = ['Relevance', 'Most recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort = () => {
    const [anchorEl, setAnchorEl] = useState(null); // For anchoring the dropdown
    const [selectedItem, setSelectedItem] = useState('Relevance'); // Selected item
    const [open, setOpen] = useState(false); // Dropdown visibility

    const handleToggleDropdown = (event) => {
        setAnchorEl(event.currentTarget); // Anchor the dropdown to the button
        setOpen((prev) => !prev); // Toggle dropdown visibility
    };

    const handleClose = () => {
        setOpen(false); // Close dropdown
    };

    const handleOptionSelect = (item) => {
        setSelectedItem(item); // Set the selected item
        setOpen(false); // Close the dropdown
    };

    return (
        <Box>
            {/* Display selected item with the settings icon */}
            <Box onClick={handleToggleDropdown} display="flex" alignItems="center" hover mb={1} px={1} className="hover:bg-quarter-spanish-white-600 border bg-quarter-spanish-white-500 items-center rounded-xl text-sm cursor-pointer">
                <IconButton size="small" className='!text-quarter-spanish-white-100'>
                    <TuneRoundedIcon />
                </IconButton>
                <Typography variant="body3" sx={{ flexGrow: 1 }}>
                    {selectedItem}
                </Typography>
            </Box>

            {/* Button to toggle dropdown */}
            {/* <Button  variant="contained" >
                select
            </Button> */}

            {/* Dropdown */}
            <Popper open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal>
                <ClickAwayListener onClickAway={handleClose}>
                    <Box
                        className='text-sm'
                        sx={{
                            mt: 1,
                            ml: 1,
                            p: 1,
                            width: 150,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            borderRadius: 3,
                        }}
                    >
                        <List>
                            {opt.map((item) => (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton onClick={() => handleOptionSelect(item)}>
                                        {item}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </ClickAwayListener>
            </Popper>
        </Box>
    );
}

export default Sort;
