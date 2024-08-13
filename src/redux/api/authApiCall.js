import { authAction } from "../slices/authSlice";
import requset from "../../utils/requset";
import { toast } from "react-toastify";

// Login User
export function loginUser(user){
    return async (disaptch) => {
        try {
            const { data } = await requset.post("/api/auth/login",user);
            disaptch(authAction.login(data));
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }
}

// Logout User
export function logoutUser(){
    return async (disaptch) => {
        disaptch(authAction.logout());
        localStorage.removeItem("userInfo");
    }
}

// Register User
export function registerUser(user){
    return async (disaptch) => {
        try {
            const { data } = await requset.post("/api/auth/register",user);
            disaptch(authAction.register(data.message));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
