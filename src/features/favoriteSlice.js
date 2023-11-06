import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        images: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.images.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.images = state.images.filter((image) => image.id != action.payload.id)
        }
    }
})


export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectFavoriteImages = (state) => state.favorites.images;

export default favoriteSlice.reducer;