import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/api/authApiCall";

const HeadeRight = () => {
    
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const [dropdown, setDropDown] = useState(false);

    // Logout Handler
    const logoutHandler = () => {
        setDropDown(false);
        dispatch(logoutUser());
    }

    return (
        <div className="header-right">
            {user ?
                <>
                    <div className="header-right-user-info">
                        <span
                            onClick={() => setDropDown(prev => !prev)}
                            className="header-right-username">
                            {user?.username}
                        </span>
                        <img src={user?.profilePhoto.url} alt="user photo"
                            className="header-right-user-user-photo" />
                        {dropdown && (
                            <div className="header-right-dropdown">
                                <Link
                                    onClick={() => setDropDown(false)}
                                    to={`/profile/${user?._id}`}
                                    className="header-dropdown-item">
                                    <i className="bi bi-file-person">
                                        <span>Profile</span>
                                    </i>
                                </Link>
                                <div onClick={logoutHandler}
                                 className="header-dropdown-item">
                                    <i className="bi bi-back-arrow-in-left">Logout</i>
                                </div>
                            </div>

                        )}
                    </div>
                </> : (
                    <>
                        <Link to="/login" className="header-right-link">
                            <i className="bi bi-box-arrow-in-right">
                                <span>Login</span>
                            </i>
                        </Link>
                        <Link to="/register" className="header-right-link">
                            <i className="bi bi-person-plus">
                                <span>Register</span>
                            </i>
                        </Link>
                    </>
                )}
        </div>
    );
}

export default HeadeRight;