import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null
    },
    reducers: {
        setProfile(state,action){
            state.profile = action.payload;
        },
        setProfilePhoto(state,action){
            state.profile.profilePhoto = action.payload;
        },
        updateProfileState(state,action){
            state.profile = action.payload;
        }
    }
});

const profileReducer = profileSlice.reducer;
const profileAction = profileSlice.actions;

export { profileReducer, profileAction } 