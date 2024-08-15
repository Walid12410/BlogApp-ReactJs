import "./post-page.css";
import PostList from "../../components/posts/PostList";
import SideBar from "../../components/sidebar/SideBar";
import { categories} from "../../dummyData";
import Pagination from "../../components/pagination/Pagination";
import { useEffect , useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchPosts,PostCount } from "../../redux/api/postApiCall";


const POST_PER_PAGE = 3;

const PostsPage = () => {

    const dispatch = useDispatch();
    const { postsCount , posts } = useSelector(state => state.post);

    const [currentPage , setCurrenPage] = useState(1);
    const pages = Math.ceil(postsCount / POST_PER_PAGE);

    useEffect(()=>{
        dispatch(fetchPosts(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    /* make another useeffect to call the postcount one-
    times because first it will call every time current page change
    */
    useEffect(()=>{
        dispatch(PostCount());
    }, []);

    return ( 
        <>
        <section className="posts-page">
            <PostList posts={posts}/>
            <SideBar categories={categories}/>
        </section>
        <Pagination 
         pages = {pages}
         currentPage={currentPage}
         setCurrenPage={setCurrenPage} />
        </>
     );
}
 
export default PostsPage;