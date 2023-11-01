import { createSlice } from "@reduxjs/toolkit";
import { getSearchThunk } from "./searchThunk";

const searchSlice = createSlice({
    name: 'cards',
    initialState: {
        status: "idle",
        data: [],
        error: null
    },
    reducers:{
        addCard: (state, action) => {
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase( getSearchThunk.pending, (state, payload) => {
            state.status = "pending"
        }).addCase( getSearchThunk.rejected, (state, payload) => {
            state.status = "rejected"
        }).addCase( getSearchThunk.fulfilled, (state, payload) => {
            state.status = "fulfilled"
            state.data = [...state.data, action.payload]
        })
    }
})

export const getCardData = (state) => state.cards.data
export const getCardStatus = (state) => state.cards.status
export const getCardError = (state) => state.cards.error
export const {addCard} = searchSlice.actions