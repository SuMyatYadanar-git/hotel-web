import React from 'react'

import bg1 from '../../../images/hotel_pink.jpg'

const RestaurantItem = props => {
    return (
        <div>
            <div className="text-center py-4">
                <div>breakfast</div>
                <div>from 6am to 9:30am</div>
            </div>

            <div className="d-flex flex-row flex-wrap flex-lg-nowrap justify-content-center ">
                <div className="col-lg-6 c0l-sm-6 pt-1">
                    < RestaurantMenu img={bg1} name="curry1" about="curry is dkflkasdjflkkjkkfaksf" price="20$" />
                </div>
                <div className="col-lg-6 col-sm-6 pt-1">
                    < RestaurantMenu img={bg1} name="curry1" about="curry is dkflkasdjflkkjkkfaksf" price="20$" />
                </div>
            </div>


        </div>
    )
}
export default RestaurantItem

const RestaurantMenu = ({ img, name, about, price }) => {
    return (
        <div className="border border-success p-2">
        <div className="d-flex justify-content-between flex-wrap ">
            <div className="flex-fill w-50"><img src={img} alt="breakfast" className="img-fluid" /></div>
            <div className=" flex-fill px-3">
                <div>{name}</div>
                <div>{about} </div>
                <div>{price}</div>
            </div>
        </div>
        </div>
        

    )
}