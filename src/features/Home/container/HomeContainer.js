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
        <div className="container-fluid p-0 ">
            <div className="position-relative">
                <HomeCarousel />
                <div className="position-absolute" style={{  top: 0,}}><Navbar /></div>
            </div>

            <AvailabityTime />
            <RoomInfo />
            <div className="container">
            <AboutUs />
            </div>
           
            <InfoSlide />
            <EventCard />
            <ServiceCard />
        </div>
    )
}
export default HomeContainer;