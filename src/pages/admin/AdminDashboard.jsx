import AdminSideBar from "./AdminSideBar";
import AdminMain from "./AdminMain";
import "./admin.css";

const AdminDasBoard = () => {
    return ( 
        <section className="admin-dashboard">
           <AdminSideBar/>
           <AdminMain />
        </section>
     );
}
 
export default AdminDasBoard;