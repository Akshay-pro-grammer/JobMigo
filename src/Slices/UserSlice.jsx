import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:getItem("user"),
    reducers:{
        setUser:(state,action)=>{
            setItem("user",action.payload);
            state=getItem("user");
            return state;
        },
        removeUser:(state)=>{
            removeItem("user");
            state=null;
            return state;
        }
    }
});
export const {setUser,removeUser}=UserSlice.actions;
export default UserSlice.reducer;