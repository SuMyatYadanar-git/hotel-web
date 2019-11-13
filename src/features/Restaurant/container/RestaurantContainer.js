import React from 'react'
import RestaurantHeader from '../components/RestaurantHeader'
import BreakfastCard from '../components/BreakfastCard'
import LunchCard from '../components/LunchCard'
import DinnerCard from '../components/DinnerCard'
import DrinkCard from '../components/DrinkCard'

import RestaurantItem from '../components/RestaurantItem'


const RestaurantContainer = props => {
    return (
        <div className="container-fluid-0">
            <RestaurantHeader />
            <div className="container">
                <RestaurantItem />
            </div>
            {/* <BreakfastCard/>   
            <LunchCard/>
            <DinnerCard/>
            <DrinkCard/> */}

        </div>
    )
}
export default RestaurantContainer