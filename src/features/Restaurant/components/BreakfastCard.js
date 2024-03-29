import React from 'react'

import bg1 from '../../../images/hotel_pink.jpg'

const BreakfastCard = props => {
    return (
        <div>
            <div>breakfast</div>
            <div>from 6am to 9:30am</div>

            <div className="d-flex flex-row flex-wrap flex-lg-nowrap justify-content-center ">
                <div className="col-6 ">
                    < RestaurantMenu img={bg1} name="curry1" about="curry is dkflkasdjflkkjkkfaksf" price="20$" />
                </div>
                <div className="col-6 ">
                    < RestaurantMenu img={bg1} name="curry1" about="curry is dkflkasdjflkkjkkfaksf" price="20$" />
                </div>
            </div>


        </div>
    )
}
export default BreakfastCard

const RestaurantMenu = ({ img, name, about, price }) => {
    return (
        <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap w-75">
            <div className="flex-fill"><img src={img} alt="breakfast" className="img-fluid" /></div>
            <div className="flex-fill px-3">
                <div>{name}</div>
                <div>{about} </div>
                <div>{price}</div>
            </div>
        </div>
    )
}