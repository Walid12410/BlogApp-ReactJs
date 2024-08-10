import { Link, useParams } from "react-router-dom";
import { posts } from "../../dummyData";
import "./post-details.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import swal from "sweetalert";
import UpdatePostModal from "./UpdatePostModal";


const PostDetails = () => {
    const { id } = useParams();
    const post = posts.find(p => p._id === parseInt(id));

    const [file, setFile] = useState(null);
    const [updatePost, setUpdatePost] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Update Image submit Handler
    const updateImageSubmitHandler = (e) => {
        e.preventDefault();
        if (!file) {
            return toast.warning("there is no file!");
        }

        console.log("Image uploaded successfully");
    };

    // Delete Post Handler
    const deletePostHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Post has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    return (
        <section className="post-details">
            <ToastContainer theme="colored" position="top-center" />
            <div className="post-details-image-wrapper">
                <img src={file ? URL.createObjectURL(file) : post.image} alt={post.title} className="post-details-image" />
                <form onSubmit={updateImageSubmitHandler} className="update-post-image-form">
                    <label htmlFor="file" className="update-post-label">
                        <i className="bi bi-image-fill">
                            Select new image
                        </i>
                    </label>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit">Upload</button>
                </form>
            </div>
            <h1 className="post-details-title">
                {post.title}
            </h1>
            <div className="post-details-user-info">
                <img src={post.user.image} alt={post.user.username} className="post-details-user-image" />
                <div className="post-details-user">
                    <strong>
                        <Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
                    </strong>
                    <span>{post.createdAt}</span>
                </div>
            </div>
            <p className="post-details-description">
                {post.description}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui, eveniet asperiores. Voluptatum a commodi reiciendis
                tempore illo vitae ducimus earum doloremque nulla, aliquam
                possimus eius? Nisi sequi magni fuga sunt!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui, eveniet asperiores. Voluptatum a commodi reiciendis
                tempore illo vitae ducimus earum doloremque nulla, aliquam
                possimus eius? Nisi sequi magni fuga sunt!
            </p>
            <div className="post-details-icon-wrapper">
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <small>{post.likes.length} Like</small>
                </div>
                <div>
                    <i onClick={() => setUpdatePost(true)} className="bi bi-pencil-square"></i>
                    <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
                </div>
            </div>
            <AddComment />
            <CommentList />
            {updatePost && <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />}
        </section>
    );
}

export default PostDetails;
