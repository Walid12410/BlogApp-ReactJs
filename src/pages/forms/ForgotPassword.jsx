import "./form.css";
import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {


   const [email,setEmail] = useState("");

   // Form submit hander 
   const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required!");

    console.log({email});

   }

    return (  
        <section className="form-container">
          <ToastContainer theme="colored" position="top-center"/>
            <h1 className="form-title">
                Forgot Password
            </h1>
            <form onSubmit={formSubmitHandler} className="form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-input" id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email"/>
                </div>
                <button type="submit" className="form-btn">
                    Submit
                </button>
            </form>
        </section>
    );
}
 
export default ForgotPassword;