import React from 'react'
import styles from "./CarouselPage.module.css";
import NewsWidget from '../components/NewsWidget';
import WeatherWidget from '../components/WeatherWidget';
import ProfileWidget from '../components/ProfileWidget';

const CarouselPage = () => {
  return (
   <div className={styles.container}> 
    <div className={styles.profileWidget}>
        <ProfileWidget/>
    </div>
    <div className={styles.WeatherWidget}>
        <WeatherWidget/>
    </div>
    <div className={styles.NewsWidget}>
        <NewsWidget/>
    </div>
   </div> 
  )
}

export default CarouselPage;