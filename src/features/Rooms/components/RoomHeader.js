import React from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../../app/Header'
import bg1 from '../../../images/hotel1.jpg'

const RoomHeader = props => {
    const {location} = props
  
    return (
        <div>
           <Header bgimg={bg1} title={location.pathname.slice(1)}/>
        </div>
    )
}
export default withRouter(RoomHeader)