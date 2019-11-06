import React from 'react'

import bg1 from '../../../images/hotel_pink.jpg'
const AboutUs = props => {
    return (
        <div className="py-5 d-flex flex-column justify-content-center">
            <div className="text-center" style={{ lineHeight: 2 }}>
                <span className="py-2" style={{ borderBottom: '1px solid black' }}>
                    About&nbsp;Us
                </span>
                <p className="pt-3">
                    Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage …
                 </p>
            </div>
            <div className="pt-4">
                <img src={bg1} alt="about_img" className="img-fluid img-thumbnail h-75 w-100" />
            </div>


        </div>
    )
}

export default AboutUs