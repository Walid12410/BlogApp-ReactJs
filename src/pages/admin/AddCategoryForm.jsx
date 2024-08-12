import { useState } from "react";
import { toast ,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCategoryForm = () => {

    const [title, setTitle] = useState("");

    // Form Submit handle
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(title.trim() === "") return toast.error("Category Title is required");

        console.log({title});
    }

    return ( 
        <div className="add-category">
            <ToastContainer theme="colored" position="top-center"/>
            <h6 className="add-category-title">
                Add New Category
            </h6>
            <form onSubmit={formSubmitHandler}>
                <div className="add-category-form-group">
                <label htmlFor="title">Category Title</label>
                <input value={title}
                onChange={(e)=> setTitle(e.target.value)}
                type="text" id="title" placeholder="Enter Category Title" />
                </div>
                <button className="add-category-btn" type="submit">
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default AddCategoryForm;