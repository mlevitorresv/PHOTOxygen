import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            return state.concat(action.payload)
        },
        removeFromFavorites: (state, action) => {
            return state.filter((image) => image.id !== action.payload.id)
        },
        editFromFavorites: (state, action) => {
            const { id, width, height, date, likes, alt_description } = action.payload;
            const imageToEdit = state.find((image) => image.id === id);
            if(imageToEdit){
                imageToEdit.alt_description = alt_description;
                imageToEdit.width = width;
                imageToEdit.height = height;
                imageToEdit.created_at = date;
                imageToEdit.likes = likes;
            }
        }
    }
})


export const { addToFavorites, removeFromFavorites, editFromFavorites } = favoriteSlice.actions;

export const selectFavoriteImages = (state) => state.favorite;

export default favoriteSlice.reducer;