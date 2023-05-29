import { createSlice } from "@reduxjs/toolkit";

export const PhotographyReducer = createSlice({
    name: "users",
    initialState: {
        Portfolio: [],
        Commercial: {},
        Category: [],
    },
    reducers: {
        getPortfolio: (state, action) => {
            return { ...state, Portfolio: action.payload ?? [] }
        },
        getCommercial: (state, action) => {
            return { ...state, Commercial: action.payload ?? [] }
        },
        getCategory: (state, action) => {
            return { ...state, Category: action.payload ?? [] }
        },
    },
})

export const { getPortfolio, getCommercial, getCategory } =
    PhotographyReducer.actions;

export default PhotographyReducer;