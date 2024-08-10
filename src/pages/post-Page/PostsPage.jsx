import "./post-page.css";
import PostList from "../../components/posts/PostList";
import SideBar from "../../components/sidebar/SideBar";
import {posts, categories} from "../../dummyData";
import Pagination from "../../components/pagination/Pagination";
import { useEffect } from "react";

const PostsPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return ( 
        <>
        <section className="posts-page">
            <PostList posts={posts}/>
            <SideBar categories={categories}/>
        </section>
        <Pagination />
        </>
     );
}
 
export default PostsPage;