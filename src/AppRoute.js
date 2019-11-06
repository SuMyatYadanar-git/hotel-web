import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as route from './config/route.config'
import HomeContainer from './features/Home/container/HomeContainer'
import RoomContainer from './features/Rooms/container/RoomContainer'
import UpgradePage from './features/Page/UpgradePage'
import RestaurantContainer from './features/Restaurant/container/RestaurantContainer'
import ContactContainer from './features/Contact/container/ContactContainer'



const AppRoute = props => {
    return (
        <Router>
            <Switch>
                <Route path={`${route.home}`} exact component={HomeContainer} />
                <Route path={`${route.room}`} component={RoomContainer} />
                <Route path={`${route.restaurant}`} component={RestaurantContainer} />
                <Route path={`${route.contact}`} component={ContactContainer} />
                <Route path={`${route.page}`} component={UpgradePage} />
            </Switch>
        </Router>
    )
}

export default AppRoute