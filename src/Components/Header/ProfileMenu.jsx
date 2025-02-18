import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Tooltip from '@mui/material/Tooltip';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import Logout from '@mui/icons-material/Logout';
import SwitchMode from '../convert/SwitchMode';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from "../../Slices/UserSlice"; 

const ProfileMenu = () => {
    const dispatch = useDispatch();
    const user=useSelector(state=>state.user);
    // Mode
    const [checked, setChecked] = React.useState(false);
    // 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(removeUser());
    }

    return (
        <React.Fragment>
            <div>{user.name}</div>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        >
                        <Avatar sx={{ width: 32, height: 32 }} src='/avatar.png'></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                // onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0, sx: {
                            overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': {
                                width: 32, height: 32, ml: -0.5, mr: 1,
                            },
                            '&::before': {
                                content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to='/profile'>
                <MenuItem onClick={handleClose}>
                    <AccountCircleTwoToneIcon className='mx-1' /> Profile
                </MenuItem>
                </Link>
                <MenuItem>
                    <MessageRoundedIcon className='mx-1' />  Messages
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ContactMailRoundedIcon className='mx-1' /> Resume
                </MenuItem>
                <MenuItem>
                    <div>
                        <DarkModeTwoToneIcon className='mx-1' />Dark Mode <SwitchMode checked={checked} setChecked={setChecked} />
                    </div>
                </MenuItem>
                <MenuItem onClick={handleLogout} className='!text-red-500'>
                    <Logout className='mx-1' /><span>Logout</span>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
export default ProfileMenu