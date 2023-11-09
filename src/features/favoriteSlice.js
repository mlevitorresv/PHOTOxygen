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
            state.images = state.images.filter((image) => image.id !== action.payload.id)
        },
        editFromFavorites: (state, action) => {
            const { id, width, height, date, likes } = action.payload;
            const imageToEdit = state.images.find((image) => image.id === id);
            if(imageToEdit){
                imageToEdit.width = width;
                imageToEdit.height = height;
                imageToEdit.created_at = date;
                imageToEdit.likes = likes;
            }
        }
    }
})


export const { addToFavorites, removeFromFavorites, editFromFavorites } = favoriteSlice.actions;

export const selectFavoriteImages = (state) => state.favorite.images;

export default favoriteSlice.reducer;