import React, { useState, useEffect } from "react";
import fetchWeather from "../api/fetchWeather";
import formatDateAndTime from "../utils/formatDateAndTime";


const WeatherWidget=()=>{
    const [weatherData,setWeatherData] = useState();
    const [ dateTime,setDateTime] = useState();

    useEffect(()=>{
        // fetch the weather data from the api
        fetchWeather().then((data)=>{
            const{temp_c, condition, pressure_mb,wind_kph,humidity,wind_degree}=
            data.current;
            setWeatherData({
                tempreature:temp_c,
                condition:condition.text,
                tumbnail:condition.icon,
                pressure:pressure_mb,
                wind:wind_kph,
               windDegree:wind_degree,
                humidity
            })
        })
        // get this from the utility function defined in the utils folder
        const {date,time} = formatDateAndTime();
        setDateTime({date,time});
    },[])

    return(
        <div className="">
            <div>{
             dateTime && (
                <>
                <span>{dateTime.date}</span>
                <span>{dateTime.time}</span>
                </>
             ) }

            </div>
            <div className="">
                {
                    weatherData ?(
                        <>
                        <img src={
                         weatherData.tumbnail
                        }alt="Thumbnail"/>
                        <div>{weatherData.tempreature}C</div>
                        <div>{weatherData.condition}</div>
                        <div className="details">
                            <div>
                                <span>pressure</span>
                                <span>{weatherData.pressure}mb</span>
                            </div>
                            <div>
                                <span>wind</span>
                                <span>{weatherData.wind}kph</span>
                            </div>
                            <div>
                                <span>humidity</span>
                                <span>{weatherData.humidity}%</span>
                            </div>     
                            <div>
                                <span>windDegree</span>
                                <span>{weatherData.windDegree}</span>
                            </div>                               
                        </div>
                        </>
                    ):(
                        <div>Loading...</div>
                    )
                }
            </div>
        </div>
    )
}

export default WeatherWidget;