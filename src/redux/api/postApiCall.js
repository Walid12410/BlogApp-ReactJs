import requset from "../../utils/requset";
import { toast } from "react-toastify";
import { postAction } from "../slices/postSlice";


// fetch Posts Based On Page Number
export function fetchPosts(pageNumber) {
    return async (dispatch) => {
        try {
            const { data } = await requset.get(`/api/posts?pageNumber=${pageNumber}`);
            dispatch(postAction.setPosts(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// fetch Posts Count
export function PostCount() {
    return async (dispatch) => {
        try {
            const { data } = await requset.get(`/api/posts/count`);
            dispatch(postAction.setPostCount(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// fetch Posts Based On Category
export function fetchPostsBasedOnCategory(category) {
    return async (dispatch) => {
        try {
            const { data } = await requset.get(`/api/posts?category=${category}`);
            dispatch(postAction.setPostCate(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Create Post
export function createPost(newPost) {
    return async (dispatch, getState) => {
        try {
            dispatch(postAction.setLoading());
            await requset.post(`/api/posts`, newPost, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch(postAction.setIsPostCreated());
            setTimeout(() => dispatch(postAction.clearIsPostCreated()), 2000); // 2 second
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(postAction.clearLoading());
        }
    }
}

// fetch Single Post Details
export function fetchSinglePost(postID) {
    return async (dispatch) => {
        try {
            const { data } = await requset.get(`/api/posts/${postID}`);
            dispatch(postAction.setPost(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Toggle like post
export function toggleLikePost(postID) {
    return async (dispatch,getState) => {
        try {
            const { data } = await requset.put(`/api/posts/like/${postID}`,{},{
                headers :{
                    Authorization : "Bearer " + getState().auth.user.token,
                }
            });
            dispatch(postAction.setLike(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
