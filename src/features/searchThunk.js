import { createAsyncThunk } from "@reduxjs/toolkit";

const key = import.meta.env.VITE_API_KEY;
let url;

export const getSearchThunk = createAsyncThunk(
    "card/getSearchThunk",
    async (text = "") => {
        if(text === ''){
            url = `https://api.unsplash.com/photos/random?count=20&client_id=${key}`;
        }
        else{
            url=`https://api.unsplash.com/search/photos?query=${text}&per_page=20&client_id=${key}`
        }
        try{
            const request = await fetch(url)
            if(!request.ok){
                throw new Error("No se cargaron las imagenes")
            }
            const data = await request.json();
            return data;
        } catch (error){
            throw error
        }
    }
)