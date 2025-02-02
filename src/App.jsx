import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Divider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fixed missing imports
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
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


const theme = createTheme({
  palette: {
    mode: "dark", // Change to "dark" for dark mode
    primary: {
      main: "#fed33c", // Custom primary color
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
    <ThemeProvider  theme={theme}>
      <BrowserRouter>
      <Header/>
      <Divider variant='middle'/>
        <Routes>
          {/* NOTE:- routes matches from the starting , in sequence thats why wew keep the wild card at the end */}
          <Route path="/find-jobs" element={<FindJobs/>} />
          <Route path="/jobs" element={<JobDescPage/>} />
          <Route path="/apply-job" element={<ApplyJobPage/>} />
          <Route path="/find-talent" element={<FindTalent/>} />
          <Route path="/talent-profile" element={<TalentProfilePage/>} />
          <Route path="/company" element={<CompanyPage/>} />
          <Route path="/posted-job" element={<PostedJobPage/>} />
          <Route path="/job-history" element={<JobHistoryPage/>} />
          <Route path="/post-job" element={<PostJobPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<SignUpPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <CssBaseline />
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
