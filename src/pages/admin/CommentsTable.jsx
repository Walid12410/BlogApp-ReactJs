import AdminSideBar from "./AdminSideBar";
import "./admin-table.css";
import swal from "sweetalert";


const CommentsTable = () => {


    // Delete Comment Handler
    const deleteCommentHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this this Comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Comment has been deleted!", {
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
                <h1 className="table-title">Comments</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6].map((item) => (
                            <tr key={item}>
                                <td>{item}</td>
                                <td>
                                    <div className="table-image">
                                        <img className="table-user-image" src="/images/user-avatar.png" alt="" />
                                        <span className="table-username">walid jallad</span>
                                    </div>
                                </td>
                                <td>thank you for this post!</td>
                                <td><div className="table-button-group">
                                    <button onClick={deleteCommentHandler}>
                                        Delete Comment</button>
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CommentsTable;