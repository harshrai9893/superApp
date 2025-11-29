import  axios  from "axios";

const BASE_URL= "http://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_API_WEATHER;

const CACHE_DURATION = 60*60*1000;

const fetchWeather = async(city="Delhi" )=>{
    // set a cache key (ynha local storage ki key develope ho rhi hai)
    const cachekey = `weather_${city.toLowerCase()}`;
    // using local storage to cache the data
    const cacheData = localStorage.getItem(cachekey);

    // check if i already have the data in the catche 
    if (cacheData) {
        const{data, timestamp}=JSON.parse(cacheData);
        if (Date.now() -timestamp < CACHE_DURATION){
            console.log("Fetching data from cache...");
            return data;
        }
    }


    try{
        const{data}=await axios.get(`${BASE_URL}/current.json`,{
            params:{
                key:API_KEY,
                q:city
            }
        }) ;
    //  save the data in the cache
    localStorage.setItem(cachekey,JSON.stringify({data,timestamp:Date.now()}));


    return data;   }
catch(error){
    console.error(error);
}
    }

    export default fetchWeather;