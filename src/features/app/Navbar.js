import React, { useState } from 'react'
import { withMedia } from 'react-media-query-hoc'

import icon1 from '../../images/hotel_pink.jpg'

const Navbar = props => {
    const { media } = props
    const [width, setWidth] = useState(window.innerWidth)
    const [expand, setExpand] = useState(false)

    return (
        <div className="container bg-transparent sticky-top position-fixed border border-danger">
          {
              !media.mobile && 
              <div className="py-2 d-flex align-items-start " style={{ borderBottom: '1px solid black' ,fontSize:media.desktop ? 16 :14 }}>
              <div className="  ">
                  <span ><i class="fas fa-map-marker-alt" /> </span>
                  <span>225 Beach Street, Australian</span>
              </div>
              <div className="px-3 ">
                  <span > <i class="fas fa-phone-alt" /></span>
                  <span> 1-548-854-8898</span>
              </div>
          </div>
          }
       

            <div className=" d-flex justify-content-between align-items-center py-2" >
                <div> <img src={icon1} className="img-fluid d-block" width={50} height={50} /></div>
                <div >
                    {
                        // window.innerWidth < 792
                        media.mobile
                            ?
                            <div className="dropdown dropleft" >
                                <button className="btn btn-secondary" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-bars"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right mt-4" aria-labelledby="dropdownMenuButton">
                                    <div className="dropdown-item">Home</div>
                                    <div className="dropdown-item">Rooms</div>
                                    <div className="dropdown-item">Restaurant</div>
                                    <div className="dropdown-item">Contact</div>

                                </div>
                            </div>
                            :
                            <div >
                                <span className="px-3">Home</span>
                                <span className="px-3">Rooms</span>
                                <span className="px-3">Restaurant</span>
                                <span className="px-3">Contact</span>

                            </div>
                    }
                </div>

            </div>

        </div>
    )
}
export default withMedia(Navbar)
