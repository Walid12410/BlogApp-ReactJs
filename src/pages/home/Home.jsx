import PostList from "../../components/posts/PostList";
import "./home.css" ; 
import {posts , categories } from "../../dummyData";
import Sidebar from "../../components/sidebar/SideBar";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/api/postApiCall";


const Home = () => {

    const dispatch = useDispatch();

    const { posts } = useSelector(state => state.post);

    useEffect(()=> {
        dispatch(fetchPosts(1));
    }, [])

    return (  
       <section className="home">
        <div className="home-hero-header">
            <div className="home-hero-header-layout">
                <h1 className="home-title">
                   Welcome to Blog
                </h1>
            </div>
        </div>
        <div className="home-lastest-post">Latest Posts</div>
        <div className="home-container">
          <PostList posts = {posts}></PostList>
            <Sidebar categories = {categories}/>
        </div>
        <div className="home-see-post-link">
            <Link to="/posts" className="home-link">
            See All Posts</Link>
        </div>
       </section>
    );
}
 
export default Home;