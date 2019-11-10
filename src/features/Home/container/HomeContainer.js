import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import HomeCarousel from '../components/HomeCarousel'
import AvailabityTime from '../components/AvailabityTime'
import RoomInfo from '../components/RoonInfo'
import AboutUs from '../components/AboutUs'
import InfoSlide from '../components/InfoSlide'
import ServiceCard from '../components/ServiceCard'
import EventCard from '../components/EventCard'
import Navbar from '../../app/Navbar'
import '../components/home.css'

const HomeContainer = props => {
    const {media} = props

    return (
        <div className="container-fluid p-0 ">
            <div >
                <HomeCarousel media={media}/>
                <Navbar />
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
export default withMedia(HomeContainer);