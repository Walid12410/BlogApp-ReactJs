import { useState } from "react";
import "./update-profile.css"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import {updateUserProfile} from "../../redux/api/profileApiCall"

const UpdateProfileModal = ({ profile, setUpdatePofile }) => {
   
    const dispatch = useDispatch();

    const [username, setUsername] = useState(profile.username);
    const [bio, setBio] = useState(profile.bio);
    const [password, setPassword] = useState("");

    // Form subit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        const updatedUser = {username, bio}

        if(password.trim() !== ""){
            updatedUser.password = password;
        }

        dispatch(updateUserProfile(updatedUser, profile?._id ));
        setUpdatePofile(false);

    }

    return (
        <div className="update-profile">
            <form onSubmit={formSubmitHandler} className="update-profile-form">
                <abbr title="close">
                    <i onClick={() => setUpdatePofile(false)}
                     className="bi bi-x-circle-fill update-profile-form-close"></i>
                </abbr>
                <h1 className="update-profile-title">Update Your profile</h1>
                <input type="text" className="update-profile-input"
                    value={username}
                    placeholder="UserName"
                    onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" className="update-profile-input"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio" />
                    <input type="password" className="update-profile-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <button type="submit" className="update-profile-btn">
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default UpdateProfileModal;