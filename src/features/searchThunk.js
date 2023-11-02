import { createAsyncThunk } from "@reduxjs/toolkit";

// const key = import.meta.env.VITE_API_KEY;
const key = 'I_dnhON-yJxz4LEZGcea6MdVBSk2uZsV1vjTa-cjc1U'
const searchBar = document.getElementById('searchBar')

export const getSearchThunk = createAsyncThunk(
    "card/getSearchThunk",
    async () => {
        if(searchBar.value === ''){
                const request = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}`)
                const data = await request.json();
                console.log(data);
                return data;            
        }
        else{
                const request = await fetch(`https://api.unsplash.com/search/photos?query=${searchBar.value}&client_id=${key}`)
                const data = await request.json();
                console.log(data);
                return data;
        }        
    }
)