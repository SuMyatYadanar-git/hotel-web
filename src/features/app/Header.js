import React from 'react'
import { withMedia } from 'react-media-query-hoc'

import Navbar from '../app/Navbar'

const Header = props => {

    const { bgimg, title, media } = props

    const bgStyle = {
        paddingTop: media.mobile ? '30%' : media.tablet ? '20%' : '10%',
        paddingBottom: media.mobile ? '35%' : media.tablet ? '20%' : '10%',
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textShadow: '1px 1px grey',
        // backgroundColor: 'rgba(72, 72, 72, 0.5)',
        boxSizing:'border-box'
    }

    return (

        <div style={bgStyle} className="text-center text-light w-auto">
            <Navbar {...props} />
            <span className="text-uppercase"> {title}</span>
        </div>
    )
}

export default withMedia(Header);