import AdminSideBar from "./AdminSideBar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { posts } from "../../dummyData";


const PostTable = () => {


    // Delete Post Handler
    const deletePostHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this this post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Post has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    return (
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Posts</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User</th>
                            <th>Post Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item,index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="table-image">
                                        <img className="table-user-image" src="/images/user-avatar.png" alt="" />
                                        <span className="table-username">{item.user.username}</span>
                                    </div>
                                </td>
                                <td>{item.title}</td>
                                <td><div className="table-button-group">
                                    <button>
                                        <Link to={`/posts/details/${item._id}`}>
                                            View Post
                                        </Link>
                                    </button>
                                    <button onClick={deletePostHandler}>Delete Post</button>
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default PostTable;