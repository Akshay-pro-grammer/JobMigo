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
export {registerUser,loginUser};