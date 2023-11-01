import { createAsyncThunk } from "@reduxjs/toolkit";

const key = import.meta.env.VITE_API_KEY;

export const getSearchThunk = createAsyncThunk(
    "card/getSearchThunk",
    async () => {
        const request = await fetch(`https://api.unsplash.com/search/photos?client_id=${key}`)
        const data = await request.json();
        return data;
    }
)