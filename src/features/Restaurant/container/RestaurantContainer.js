import React from 'react'
import RestaurantHeader from '../components/RestaurantHeader'
import BreakfastCard from '../components/BreakfastCard'
import LunchCard from '../components/LunchCard'
import DinnerCard from '../components/DinnerCard'
import DrinkCard from '../components/DrinkCard'


const RestaurantContainer = props => {
    return (
        <div>
            <RestaurantHeader/>
            <BreakfastCard/>
            <LunchCard/>
            <DinnerCard/>
            <DrinkCard/>
        
        </div>
    )
}
export default RestaurantContainer