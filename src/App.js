import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import PostsPage from "./pages/post-Page/PostsPage";
import AdminDasBoard from "./pages/admin/AdminDashboard";
import CreatePost from "./pages/create-post/CreatePost";
import Footer from "./components/footer/Footer";
import PostDetails from "./pages/post-details/PostDetails";
import React from 'react';


function App() {
  return (
    <BrowserRouter >
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/create-post" element={<CreatePost />} />
        <Route path="/posts/details/:id" element={<PostDetails />} />
        <Route path="/admin-dashboard" element={<AdminDasBoard />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
