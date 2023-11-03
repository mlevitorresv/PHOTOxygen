import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            state.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;