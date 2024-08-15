import requset from "../../utils/requset";
import { toast } from "react-toastify";
import { postAction } from "../slices/postSlice";


// fetch Posts Based On Page Number
export function fetchPosts(pageNumber){
    return async (dispatch) => {
        try {
            const {data} = await requset.get(`/api/posts?pageNumber=${pageNumber}`);
            dispatch(postAction.setPosts(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}


// fetch Posts Count
export function PostCount(){
    return async (dispatch) => {
        try {
            const {data} = await requset.get(`/api/posts/count`);
            dispatch(postAction.setPostCount(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}


// fetch Posts Based On Category
export function fetchPostsBasedOnCategory(category){
    return async (dispatch) => {
        try {
            const {data} = await requset.get(`/api/posts?category=${category}`);
            dispatch(postAction.setPostCate(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
