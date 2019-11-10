import React from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../../app/Header'
import bg1 from '../../../images/hotel3.jpg'

const ContactHeader = props =>{
    const {location} = props

    return(
        <Header bgimg={bg1} title={location.pathname.slice(1)} />
    )
}

export default withRouter(ContactHeader)    