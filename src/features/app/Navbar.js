import React, { useState } from 'react'
import { withMedia, } from 'react-media-query-hoc'
import { withRouter, Link } from 'react-router-dom'

import icon1 from '../../images/hotel_pink.jpg'
import * as route from '../../config/route.config'

const Navbar = props => {
    const { media } = props
    const [width, setWidth] = useState(window.innerWidth)
    const [expand, setExpand] = useState(false)

    console.log(props.Link)


    return (
        <div className=" sticky-top position-fixed w-100">
            <div className="bg-transparent  mx-5 text-light pt-0">
                {
                    !media.mobile &&
                    <div className="py-2 d-flex align-items-start " style={{ borderBottom: '1px solid #D3D3D3', fontSize: media.desktop ? 16 : 14 }}>
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


                <div className=" d-flex justify-content-between align-items-center py-1" style={{ borderBottom: media.mobile && '1px solid #dfdfdf' }}>
                    <div style={{ cursor: 'pointer' }}> <img src={icon1} className="img-fluid d-block" width={50} height={50} /></div>
                    <div >
                        {
                            // window.innerWidth < 792
                            media.mobile
                                ?
                                <div className="dropdown dropleft" >
                                    <button className="btn btn-secondary" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                    <div className=" dropdown-menu dropdown-menu-right mt-4" aria-labelledby="dropdownMenuButton">
                                        <Link to='/' style={{textDecoration:'none',color:'white'}} >  <div className="dropdown-item">Home</div></Link>
                                        <Link to={route.room} style={{textDecoration:'none',color:'white'}}>  <div className="dropdown-item">Rooms</div></Link>
                                        <Link to={route.restaurant} style={{textDecoration:'none',color:'white'}}>  <div className="dropdown-item">Restaurant</div></Link>
                                        <Link to={route.contact} style={{textDecoration:'none',color:'white'}}> <div className="dropdown-item">Contact</div></Link>

                                    </div>
                                </div>
                                :
                                <div className="" style={{ cursor: 'pointer', }} >
                                    <Link to={route.home} style={{textDecoration:'none',color:'white'}}>Home </Link>
                                    <Link to={route.room} style={{textDecoration:'none',color:'white'}}>  <span className="px-3">Rooms</span> </Link>
                                    <Link to={route.restaurant} style={{textDecoration:'none',color:'white'}}> <span className="px-3">Restaurant</span></Link>
                                    <Link to={route.contact} style={{textDecoration:'none',color:'white'}}> <span className="px-3">Contact</span> </Link>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
export default withRouter(withMedia(Navbar))
