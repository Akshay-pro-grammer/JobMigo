import axios from "axios";
const base_url="http://localhost:8080/users/";
const registerUser=async(user)=>{
    return axios.post(`${base_url}register`,user)
    .then(res=>res.data)
    .catch(err=>{throw error;});
}
const loginUser= async(login)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(err=>{throw err;});
}
const sendOtp=async(email)=>{
        return axios.post(`${base_url}sendOtp/${email}`)
        .then(res=>res.data)
        .catch(err=>{throw err;});  
}
const verifyOtp=async(email,otp)=>{
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(res=>res.data)
    .catch(err=>{throw err;});
}
const changepass=async(email,password)=>{
    return axios.post(`${base_url}changePass`,{email,password})
    .then(res=>res.data)
    .catch(err=>{throw err;});
}
export {registerUser,loginUser,sendOtp,verifyOtp,changepass};