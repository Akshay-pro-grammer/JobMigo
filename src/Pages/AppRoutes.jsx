import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import { Divider } from "@mui/material"
import FindJobs from "./FindJobs"
import JobDescPage from "./JobDescPage"
import ApplyJobPage from "./ApplyJobPage"
import FindTalent from "./FindTalent"
import TalentProfilePage from "./TalentProfilePage"
import CompanyPage from "./CompanyPage"
import JobHistoryPage from "./JobHistoryPage"
import PostedJobPage from "./PostedJobPage"
import PostJobPage from "./PostJobPage"
import SignUpPage from "./SignUpPage"
import ProfilePage from "./ProfilePage"
import HomePage from "./HomePage"
import { useSelector } from "react-redux"
import Footer from "../Components/Footer/Footer"

const AppRoutes = () => {
    const user=useSelector(state=>state.user);
    return <BrowserRouter>
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
        <Route path="/signup" element={user?<Navigate to="/"/>:<SignUpPage/>} />
        <Route path="/login" element={user?<Navigate to="/"/>:<SignUpPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>}

export default AppRoutes
