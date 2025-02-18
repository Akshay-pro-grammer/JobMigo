import React from "react";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import NavLinks from "./NavLinks"; // Correct path based on your folder structure
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";


const Header = () => {
    const location = useLocation();
    const user=useSelector(state=>state.user);
    return (
        (location.pathname!="/signup"&&location.pathname!="/login" )
        &&
        <div className="w-full bg-nile-blue-800 h-20 px-6 text-white flex justify-between items-center font-['poppins']">
            {/* Logo Section */}
            <div className="flex gap-2 items-center text-quarter-spanish-white-400">
                <Link to={user?'/':'/login'} className="flex gap-2 items-center">
                <BusinessCenterOutlinedIcon className="!h-10 !w-10"/>
                <div className="text-3xl font-semibold">JobMigo</div>
                </Link>
            </div>

            {/* Navigation Section */}
            <NavLinks />


            {/* User Section */}
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    {/* <Avatar
                        alt="User Avatar"
                        src="/avatar.png" // Replace with actual image URL
                        sx={{ width: 40, height: 40 }} // Customize size
                    />*/}
                    {user?<ProfileMenu/>:<Link to='/login' ><Button>Login</Button></Link>}
                </div>
                {/* <div className="cursor-pointer bg-nile-blue-700 p-1.5 rounded-full">
                    <SettingsOutlinedIcon />
                </div> */}
                <div className="cursor-pointer bg-nile-blue-700 p-1.5 rounded-full">
                    <Badge color="secondary" variant="dot">
                        <NotificationsOutlinedIcon />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default Header;
