import { useState } from "react";
import "./update-comment-modal.css"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateCommentModal = ({ setUpdateComment }) => {


    const [text, setText] = useState("this is so great");

    // Form subit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(text.trim() === "") return toast.error("please write something");

        console.log({text})
    }

    return (
        <div className="update-comment">
            <form onClick={formSubmitHandler} className="update-comment-form">
                <abbr title="close">
                    <i onClick={() => setUpdateComment(false)}
                     className="bi bi-x-circle-fill update-comment-form-close"></i>
                </abbr>
                <h1 className="update-comment-title">Comment Post</h1>
                <input type="text" className="update-comment-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button type="submit" className="update-comment-btn">
                    Edit Comment
                </button>
            </form>
        </div>
    );
}

export default UpdateCommentModal;