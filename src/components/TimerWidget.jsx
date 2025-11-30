import React, { useEffect, useState } from 'react'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import "react-circular-progressbar/dist/styles.css";
import Styles from '../components/TimerWidget.module.css';

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;


const TimerWidget = () => {
    const [ timeRemaining,setTimeRemaining] = useState(0);
    const [ cachedSeconds, setcachedSeconds] = useState(0);
    const [ isRunning , setIsRunning] = useState(false);

    // calculate the percentage of time remaining
    const percentage =()=>{
        return (timeRemaining/cachedSeconds)*100;
    };

    // format  the time accordingly
    const formatTime = (time)=>{
        return `${time.hours.toString().padStart(2,"0")}:
                ${time.minutes.toString().padStart(2,"0")}:
                ${time.seconds.toString().padStart(2,"0")}`;

    };

    // handle the step count for the timer 
    const stephandler =(step)=>{
        if(isRunning || (step<0 && timeRemaining -step < 0))return;
        setTimeRemaining(timeRemaining+ step);
        setcachedSeconds(cachedSeconds + step);
    };
     
    // parse the time from seconds
    const parseTime = (time)=>{
        const hours = Math.floor(time/HOURS_STEP);
        const minutes = Math.floor ((time % HOURS_STEP)/MINUTES_STEP);
         const seconds = Math.floor (time % MINUTES_STEP);
         return {hours,minutes,seconds};
    }

    // update the new value in the state
    
    useEffect(()=>{
        // some sort of updating logic here

        if (isRunning){
            const interval = setInterval(()=>{
                setTimeRemaining((totalSeconds)=>{
                    if (totalSeconds <=0){
                        setIsRunning(false);
                        return 0;
                    }
                    return totalSeconds - 1;
                });
            },1000);
            return ()=>clearInterval(interval);
        }
    },[isRunning])

     
  return (
    <div className={Styles.container}>
        <div className={Styles.left}>

        </div>
        <div className={Styles.right}>
            <div className={Styles.configure}>
                <div className={Styles.cell}>
                    <p>Hours</p>
                    <IoIosArrowUp onClick={()=>stephandler(HOURS_STEP)}/>
                    <p>
                        {""}
                        {parseTime(cachedSeconds).hours.toString().padStart(2,"0")}
                        </p>
                        <IoIosArrowDown onClick={()=>stephandler(HOURS_STEP)}/>
                </div>
                <div className={Styles.cell}>
                  <p>Minutes</p>
                  <IoIosArrowUp onClick={()=>stephandler(MINUTES_STEP)}/>
                  <p>
                    {""}
                    {parseTime(cachedSeconds).minutes.toString().padStart(2,"0")}
                    </p>
                    <IoIosArrowDown onClick={()=>stephandler(MINUTES_STEP)}/>
                </div>  
                <div className={Styles.cell}>
                  <p>Seconds</p>
                  <IoIosArrowUp onClick={()=>stephandler(SECONDS_STEP)}/>
                  <p>
                    {""}
                    {parseTime(cachedSeconds).seconds.toString().padStart(2,"0")}
                    </p>
                    <IoIosArrowDown onClick={()=>stephandler(SECONDS_STEP)}/>
                </div>  

            </div>

        </div>
        <button>{isRunning?"pause":"start"}</button>
    </div>
  )
}

export default TimerWidget