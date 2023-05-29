import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "users",
    initialState:{
        users:[],
        user:{},
    },
    reducers: {
        getUser:(state, action) => {
            return{...state, users: action.payload ?? []};
        },
        singleUser:(state, action) => {
            return{...state, user:action.payload ?? {} };
        },
    },
});

export const { getUser, singleUser}=
userSlice.actions;

export default userSlice.reducer;