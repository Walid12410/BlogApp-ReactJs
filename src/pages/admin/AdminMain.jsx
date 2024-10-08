import AddCategoryForm from "./AddCategoryForm";
import "./admin.css";
import { Link } from "react-router-dom";


const AdminMain = () => {
    return (
        <div className="admin-main">
            <div className="admin-main-header">
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Users
                    </h5>
                    <div className="admin-cart-count">120</div>
                    <div className="admin-card-link-wrapper">
                        <Link to="/admin-dashboard/users-table" className="admin-card-link">
                            See all users
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Post
                    </h5>
                    <div className="admin-cart-count">235</div>
                    <div className="admin-card-link-wrapper">
                        <Link to="/admin-dashboard/posts-table" className="admin-card-link">
                            See all posts
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-file-post"></i>
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Categories
                    </h5>
                    <div className="admin-cart-count">10</div>
                    <div className="admin-card-link-wrapper">
                        <Link to="/admin-dashboard/categories-table" className="admin-card-link">
                            See all Categories
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-tag-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Comments
                    </h5>
                    <div className="admin-cart-count">353</div>
                    <div className="admin-card-link-wrapper">
                        <Link to="/admin-dashboard/comments-table"
                            className="admin-card-link">
                            See all commend
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-chat-left-text"></i>
                        </div>
                    </div>
                </div>
            </div>
            <AddCategoryForm />
        </div>
    );
}

export default AdminMain;