import React from 'react'

import HomeCarousel from '../components/HomeCarousel'
import AvailabityTime from '../components/AvailabityTime'
import RoomInfo from '../components/RoonInfo'
import AboutUs from '../components/AboutUs'
import InfoSlide from '../components/InfoSlide'
import ServiceCard from '../components/ServiceCard'
import EventCard from '../components/EventCard'
import Navbar from '../../app/Navbar'

const HomeContainer = props => {
    return (
        <div className="container-fluid">
            <Navbar/>
         {/* <HomeCarousel/> */}
         {/* <AvailabityTime/>
         <RoomInfo/>
         <AboutUs/>
         <InfoSlide/>
         <EventCard/>
         <ServiceCard/> */}
        </div>
    )
}
export default HomeContainer;