import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts : [],
        postsCount: null,
        postsCate: [],
        loading: false,
        isPostCreated: false,
        post:null,
    },
    reducers: {
        setPosts(state,action) {
            state.posts = action.payload;
        },
        setPostCount(state,action) {
            state.postsCount = action.payload;
        },
        setPostCate(state,action) {
            state.postsCate = action.payload;
        },
        setLoading(state){
            state.loading = true;
        },
        clearLoading(state){
            state.loading = false;
        },
        setIsPostCreated(state){
            state.isPostCreated = true;
            state.loading = false;
        },
        clearIsPostCreated(state){
            state.isPostCreated = false;
        },
        setPost(state,action){
            state.post = action.payload;
        },
        setLike(state, action) {
            state.post.likes = action.payload.likes;
        }
    }
});

const postReducer = postSlice.reducer;
const postAction = postSlice.actions;

export { postReducer, postAction };