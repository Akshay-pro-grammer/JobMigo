const signupValidation=(name,value)=>{
    switch(name){
        case "name":
            if(value.length===0)return "Name is required.";
            return "";
        case "email":
            if(value.length===0)return "Email is required.";
            if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)===false)return "Invalid email.";
            return "";
        case "password":
            if(value.length===0)return "Password is required.";
            if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)===false)return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
            return "";
        default:
            return "";
    }
}
const loginValidation=(name,value)=>{
    switch(name){
        case "email":
            if(value.length===0)return "Email is required.";
            return "";
        case "password":
            if(value.length===0)return "Password is required.";
            return "";
        default:
            return "";
    }
}
export {signupValidation,loginValidation};