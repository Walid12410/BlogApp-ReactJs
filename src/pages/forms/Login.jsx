import { Link } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/api/authApiCall";

const Login = () => {


   const [email,setEmail] = useState("");
   const [password,setPassword]  = useState("");

   const dispatch = useDispatch();

   // Form submit hander 
   const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required!");
    if (password.trim() === "")  return toast.error("Password is required!");

    dispatch(loginUser({email, password}))

   }

    return (  
        <section className="form-container">
          <ToastContainer theme="colored" position="top-center"/>
            <h1 className="form-title">
                Login to your account
            </h1>
            <form onSubmit={formSubmitHandler} className="form">
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
                    Login
                </button>
                <div className="form-footer">
                    Did you Forgot your password? <Link to="/forget-password">Forgot password</Link>
                </div>
            </form>
        </section>
    );
}
 
export default Login;