import AdminSideBar from "./AdminSideBar";
import "./admin-table.css";
import swal from "sweetalert";


const CategoriesTable = () => {


    // Delete Category Handler
    const deleteCategoryHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this this Category!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Category has been deleted!", {
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
                <h1 className="table-title">Categories</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Category Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4].map((item) => (
                            <tr key={item}>
                                <td>{item}</td>
                                <td>
                                    <b>music</b>
                                </td>
                                <td><div className="table-button-group">
                                    <button
                                     onClick={deleteCategoryHandler}>
                                        Delete Category</button>
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CategoriesTable;