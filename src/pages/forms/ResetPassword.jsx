import "./form.css";
import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {


   const [password,setPassword]  = useState("");

   // Form submit hander 
   const formSubmitHandler = (e) => {
    e.preventDefault();

    if (password.trim() === "") return toast.error("Password is required!");

    console.log({password});

   }

    return (  
        <section className="form-container">
          <ToastContainer theme="colored" position="top-center"/>
            <h1 className="form-title">
                Reset Password
            </h1>
            <form onSubmit={formSubmitHandler} className="form">
                <div className="form-group">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input type="password" className="form-input" id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter your new password"/>
                </div>
                <button type="submit" className="form-btn">
                    Submit
                </button>
            </form>
        </section>
    );
}
 
export default ResetPassword;