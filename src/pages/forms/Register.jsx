import { Link , useNavigate} from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch , useSelector } from "react-redux";
import { registerUser } from "../../redux/api/authApiCall";
import swal from "sweetalert";

const Register = () => {

    const dispatch = useDispatch();
    const { registerMessage } = useSelector(state => state.auth)


   const [username,setUsername] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword]  = useState("");

   // Form submit hander 
   const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required!");
    if (email.trim() === "") return toast.error("Email is required!");
    if (password.trim() === "") return toast.error("Password is required!");

    dispatch(registerUser({username,email,password}));
   }

   const navigate = useNavigate();


   if(registerMessage){
    swal({
        title: registerMessage,
        icon: "success"
    }).then(isOk => {
        if(isOk){
            // go to login page
            navigate("/login");
        }
    })
   }


    return (  
        <section className="form-container">
          <ToastContainer theme="colored" position="top-center"/>
            <h1 className="form-title">
                Create new account
            </h1>
            <form onSubmit={formSubmitHandler} className="form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-input" id="username"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-input" id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-input" id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter your password"/>
                </div>
                <button type="submit" className="form-btn">
                    Register
                </button>
                <div className="form-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </form>
        </section>
    );
}
 
export default Register;