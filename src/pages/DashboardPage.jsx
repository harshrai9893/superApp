import React from 'react'
import WeatherWidget from '../components/WeatherWidget'
import NewsWidget from '../components/NewsWidget'
import ProfileWidget from '../components/ProfileWidget'
import TimerWidget from '../components/TimerWidget'
import NotesWidget from '../components/NotesWidget'

const DashboardPage = () => {
  return (
    <div className='container'>
        <div><ProfileWidget/></div>
        <div><WeatherWidget/></div>
        <div><TimerWidget/></div>
        <div><NotesWidget/></div>
        <div><NewsWidget/></div>
    </div>
  )
}

export default DashboardPage