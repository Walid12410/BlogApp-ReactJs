import { profileAction } from "../slices/profileSlice";
import requset from "../../utils/requset";
import { toast } from "react-toastify";
import { authAction } from "../slices/authSlice";


// Get User profile
export function getUserProfile(userId){
    return async (dispatch) => {
        try {
            const {data} = await requset.get(`/api/users/profile/${userId}`);
            dispatch(profileAction.setProfile(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}


// Upload Profile Photo
export function uploadProfilePhoto(newPoto){
    return async (dispatch, getState) => {
        try {
            const { data } = await requset
            .post(`/api/users/profile/profile-photo-upload`,newPoto,{
                headers : {
                    Authorization : "Bearer " + getState().auth.user.token,
                    "Content-Type" : "multipart/form-data"
                }
            });
            
            dispatch(profileAction.setProfilePhoto(data.profilePhoto));
            dispatch(authAction.setUserProfilePhoto(data.profilePhoto));
            toast.success(data.message);

            // modify the user in local storage with new photo
            const user = JSON.parse(localStorage.getItem("userInfo"));
            user.profilePhoto = data?.profilePhoto;
            localStorage.setItem("userInfo",JSON.stringify(user));
            
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
