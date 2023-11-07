import { createSlice } from "@reduxjs/toolkit";
import { getSearchThunk } from "./searchThunk";

export const searchSlice = createSlice({
    name: 'cards',
    initialState: {
        status: "",
        data: [],
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase( getSearchThunk.pending, (state, action) => {
            state.status = "pending"
        }).addCase( getSearchThunk.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message
        }).addCase( getSearchThunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            console.log(action)
            state.data = action.payload
        })
    }
})

export const getCardData = (state) => state.search.data
export const getCardStatus = (state) => state.search.status
export const getCardError = (state) => state.search.error
export const {addCard} = searchSlice.actions