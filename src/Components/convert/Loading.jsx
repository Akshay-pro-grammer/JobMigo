import React from "react";
import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";

const BeautifulLoadingOverlay = (props) => {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backdropFilter: "blur(5px)", // Blurred effect
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly transparent background
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center", 
                justifyContent: "center",
                transform: props.signup ? "translateX(50%)" : "none", // Fix for shifting animation
                transition: "transform 0.3s ease-in-out",
                 
            }}
            open={props.open}
        >
            {/* Glowing CircularProgress */}
            <Box sx={{ position: "relative" }}>
                <CircularProgress
                    sx={{
                        color: "#61dafb", // Soft blue color
                        animation: "glow 1.5s infinite alternate",
                    }}
                    size={60} // Bigger size
                    thickness={5} // Slightly thicker
                />
            </Box>

            {/* Loading Text */}
            <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0.8 }}>
                Loading, please wait...
            </Typography>

            {/* Glow Effect Keyframes */}
            <style>
                {`
                    @keyframes glow {
                        0% { filter: drop-shadow(0px 0px 5px #61dafb); }
                        100% { filter: drop-shadow(0px 0px 15px #61dafb); }
                    }
                `}
            </style>
        </Backdrop>
        
    );
};

export default BeautifulLoadingOverlay;
