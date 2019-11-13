import React from 'react'

import bg1 from '../../../images/hotel_pink.jpg'

const RoomInfo = props => {
    return (
        <div>

            <div className="py-5 d-flex flex-column justify-content-center">
                <div className="text-center" style={{ lineHeight: 2 }}>
                    <span className="py-2" style={{ borderBottom: '1px solid black' }}>
                        Room&nbsp;Info
                </span>
                    <p className="pt-3">
                        Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                 </p>
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap pt-1">
                <div className="col-lg-4 col-sm-6 pt-1">
                    {/* main div */}
                    <div className="d-flex flex-column align-items-center  bg-secondary" style={{ transition: 'box-shadow .3s',borderRadius:'0.25rem',}}>
                        <div className=""><img src={bg1} alt="room-type" className="img-fluid rounded" /></div>
                        <div className=" pt-3">
                            <span>{"family room"}</span>
                            <p className="pt-2">35$ / per night</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-6 pt-1">
                    {/* main div */}
                    <div className="d-flex flex-column align-items-center  bg-secondary" >
                        <div className=""><img src={bg1} alt="room-type" className="img-fluid" /></div>
                        <div className=" pt-3">
                            <span>{"family room"}</span>
                            <p className="pt-2">35$ / per night</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-6 pt-1">
                    {/* main div */}
                    <div className="d-flex flex-column align-items-center  bg-secondary" >
                        <div className=""><img src={bg1} alt="room-type" className="img-fluid" /></div>
                        <div className=" pt-3">
                            <span>{"family room"}</span>
                            <p className="pt-2">35$ / per night</p>
                        </div>
                    </div>

                </div>
               
            </div>




        </div>
    )
}
export default RoomInfo