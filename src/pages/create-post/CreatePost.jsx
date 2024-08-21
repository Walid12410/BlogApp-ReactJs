import { useState, useEffect } from "react";
import "./create-post.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/api/postApiCall";

const CreatePost = () => {

    const dispatch = useDispatch();
    const { loading , isPostCreated } = useSelector(state => state.post);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null);


    // Form submit handler
    const formSubmitHandler = (e) => {
        // e.pre.. doesnot reload the page
        e.preventDefault();

        if(title.trim() === "") return toast.error("Post Title is required");
        if(category.trim() === "") return toast.error("Post Category is required");
        if(description.trim() === "") return toast.error("Post Description is required");
        if(!file) return toast.error("Post Image is required");

        const formData = new FormData();
        formData.append("image",file);
        formData.append("title",title);
        formData.append("description",description);
        formData.append("category",category);

        dispatch(createPost(formData));
    };


    const navigate = useNavigate();

    useEffect(() => {
        if(isPostCreated){
            navigate("/");
        }
    }, [isPostCreated , navigate]);


    return (
        <section className="create-post">
            <ToastContainer theme="colored" position="top-center"></ToastContainer>
            <h1 className="create-post-title">
                Create New Post
            </h1>
            <form onSubmit={formSubmitHandler} className="create-post-form">
                <input type="text" placeholder="Post Title" className="create-post-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="create-post-input">
                    <option disabled value="">Select A Category</option>
                    <option value="music">music</option>
                    <option value="coffee">coffee</option>
                </select>
                <textarea className="create-post-textarea" rows="5"
                    placeholder="Post Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input type="file" name="file" id="file" className="create-post-upload"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit" className="create-post-btn">
                {
                    loading ? "Loading..." : "Create"
                }</button>
            </form>
        </section >
    );
}

export default CreatePost;