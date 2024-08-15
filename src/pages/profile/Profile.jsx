import PostList from "../../components/posts/PostList";
import "./profile.css";
import { posts } from "../../dummyData";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import UpdateProfileModal from "./UpdateProfileModal";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, uploadProfilePhoto } from "../../redux/api/profileApiCall";
import { useParams } from "react-router-dom";

const Profile = () => {

    const dispatch = useDispatch();


    const { profile } = useSelector(state => state.profile);

    const [file, setFile] = useState(null);
    const [updateProfile, setUpdatePofile] = useState(false);


    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserProfile(id));
        window.scrollTo(0, 0);
    }, [id, dispatch]);

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();


        if (!file) {
            return toast.warning("there is not image select!");
        }

        const formData = new FormData();
        formData.append("image", file);

        dispatch(uploadProfilePhoto(formData));

    }

    // Delete Account Handler
    const deleteUserAccount = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, your account will remove permently",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Account has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    return (
        <section className="profile">
            <ToastContainer theme="colored" position="top-center" />
            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
                        alt=""
                        className="profile-image" />
                    <form onSubmit={formSubmitHandler}>
                        <abbr title="choose profile photo">
                            <label htmlFor="file" className="bi bi-camera-fill upload-profile-phot-icon">
                            </label>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                name="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])} />
                            <button type="submit" className="upload-profile-photo-btn">Upload</button>
                        </abbr>
                    </form>
                </div>
                <h1 className="profile-username">
                    {profile?.username}
                </h1>
                <p className="profile-bio">{profile?.bio}</p>
                <div className="user-date-joined">
                    <strong>Date Joined: </strong>
                    <span>{new Date(profile?.createdAt).toDateString()}</span>
                </div>
                <button onClick={() => setUpdatePofile(true)} className="profile-update-btn">
                    <i className="bi bi-file-person-fill"></i>
                    Update Profile
                </button>
            </div>
            <div className="profile-post-list">
                <h2 className="profile-post-list-title">{profile?.username} Posts</h2>.
                <PostList posts={posts} />
            </div>
            <button className="delete-account-btn" onClick={deleteUserAccount}>
                Delete Your Account
            </button>
            {updateProfile && <UpdateProfileModal profile={profile} setUpdatePofile={setUpdatePofile} />}
        </section>
    );
}

export default Profile;