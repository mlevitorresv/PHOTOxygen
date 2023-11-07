import { createAsyncThunk } from "@reduxjs/toolkit";

const key = import.meta.env.VITE_API_KEY;
let url;


export const getSearchThunk = createAsyncThunk(
    "card/getSearchThunk",
    async (query="", { rejectWithValue }) => {
        if(query === ''){
            url = `https://api.unsplash.com/photos/random?count=20&client_id=${key}`;
            console.log(`Searching in: ${url}`)
        }
        else{
            url = `https://api.unsplash.com/search/photos?query=${query}&per_page=18&client_id=${key}`
            console.log(`Searching in: ${url}`)
        }
        try{
            const request = await fetch(url);
            if(!request.ok){
                return rejectWithValue("No se cargaron las imágenes");
            }
            const data = await request.json();
            if(url===`https://api.unsplash.com/photos/random?count=20&client_id=${key}`){
                return data;
            }else{
                return data.results;
            }
        } catch (error){
            return rejectWithValue(error);
        }
    }
);