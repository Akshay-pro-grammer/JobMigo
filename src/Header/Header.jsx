import React from "react";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import NavLinks from "./NavLinks"; // Correct path based on your folder structure
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";


const Header = () => {
    const location = useLocation();
    return (
        (location.pathname!="/signup"&&location.pathname!="/login" )
        &&
        <div className="w-full bg-nile-blue-800 h-20 px-6 text-white flex justify-between items-center font-['poppins']">
            {/* Logo Section */}
            <div className="flex gap-2 items-center text-quarter-spanish-white-400">
                <BusinessCenterOutlinedIcon className="!h-10 !w-10"/>
                <div className="text-3xl font-semibold">JobMigo</div>
            </div>

            {/* Navigation Section */}
            <NavLinks />


            {/* User Section */}
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    <div>Akshay</div>
                    {/* <Avatar
                        alt="User Avatar"
                        src="/avatar.png" // Replace with actual image URL
                        sx={{ width: 40, height: 40 }} // Customize size
                    />*/}
                    <ProfileMenu/>
                </div>
                <div className="cursor-pointer bg-nile-blue-700 p-1.5 rounded-full">
                    <SettingsOutlinedIcon />
                </div>
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
