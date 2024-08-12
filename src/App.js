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
import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import PostTable from "./pages/admin/PostsTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import CommentsTable from "./pages/admin/CommentsTable";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";


function App() {
  return (
    <BrowserRouter >
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />} />

        <Route path="posts">
        <Route index element={<PostsPage />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="details/:id" element={<PostDetails />} />
        <Route path="categories/:category" element={<Category />} />
        </Route>

        <Route path="admin-dashboard">
        <Route index element={<AdminDasBoard />} />
        <Route path="users-table" element={<UsersTable />} />
        <Route path="posts-table" element={<PostTable />} />
        <Route path="categories-table" element={<CategoriesTable />} />
        <Route path="comments-table" element={<CommentsTable />} />
        </Route>
        
        <Route path="*" element={<NotFound /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
