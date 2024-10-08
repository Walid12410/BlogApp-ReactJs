import { Link, useParams } from "react-router-dom";
import "./post-details.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import swal from "sweetalert";
import UpdatePostModal from "./UpdatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost, toggleLikePost } from "../../redux/api/postApiCall";

const PostDetails = () => {

    const dispatch = useDispatch();
    const { post } = useSelector(state => state.post);
    const { user } = useSelector(state => state.auth);

    const { id } = useParams();

    const [file, setFile] = useState(null);
    const [updatePost, setUpdatePost] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchSinglePost(id));
    }, [id]);


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
                <img src={file ? URL.createObjectURL(file) : post?.image.url} alt={post?.title} className="post-details-image" />
                {user?._id === post?.user?._id && (
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

                )}
            </div>
            <h1 className="post-details-title">
                {post?.title}
            </h1>
            <div className="post-details-user-info">
                <img src={post?.user.profilePhoto?.url} alt={post?.user.username} className="post-details-user-image" />
                <div className="post-details-user">
                    <strong>
                        <Link to={`/profile/${post?.user._id}`}>{post?.user.username}</Link>
                    </strong>
                    <span>{new Date(post?.createdAt).toDateString()}</span>
                </div>
            </div>
            <p className="post-details-description">
                {post?.description}
            </p>
            <div className="post-details-icon-wrapper">
                <div>
                    {
                        user && (
                            <i onClick={() => dispatch(toggleLikePost(post?._id))}
                                className={
                                    post?.likes.includes(user?._id)
                                        ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"
                                }
                            ></i>
                        )
                    }
                    <small>{post?.likes.length} Like</small>
                </div>
                {user?._id === post?.user?._id && <div>
                    <i onClick={() => setUpdatePost(true)} className="bi bi-pencil-square"></i>
                    <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
                </div>
                }
            </div>
            <AddComment />
            <CommentList comments={post?.comments} />
            {updatePost && <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />}
        </section>
    );
}

export default PostDetails;
