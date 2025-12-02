import React from 'react'
import NewsWidget from '../components/NewsWidget';
import WeatherWidget from '../components/WeatherWidget';
import ProfileWidget from '../components/ProfileWidget';

export const  LayoutPage = () => {
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

