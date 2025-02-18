import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Divider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Fixed missing imports
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FindJobs from "./Pages/FindJobs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FindTalent from "./Pages/FindTalent";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import { Provider } from "react-redux";
import Store from "./Store";
import { getItem } from "./Services/LocalStorageService";
import AppRoutes from "./Pages/AppRoutes";


const theme = createTheme({
  palette: {
    mode: "dark", // Change to "dark" for dark mode
    primary: {
      main: "#1fc0f1", // Custom primary color
    },
    secondary: {
      main: "#ff4081", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Global font
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <AppRoutes/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
