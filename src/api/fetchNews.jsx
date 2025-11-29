import React from 'react'
import  axios  from "axios";
const API_KEY = import.meta.env.VITE_NEWS_API;

const BASE_URL= `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;

const fetchNews = async()=>{
 try{
        const data = await axios.get(`${BASE_URL}`)
            
return data;         }
catch(error){
    console.error(error);
}
    }


export default fetchNews


