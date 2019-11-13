
// not used
import React from "react";
import Slider from "react-slick";

import bg1 from '../images/hotel_pink.jpg'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const MySlider = props => {
    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>

               <div>  <SliderContent img={bg1} /></div>
               <div>  <SliderContent img={bg1} /></div>
               
            </Slider>
        </div>
    );
}
export default MySlider

const SliderContent= ({img}) =>{
    return(
        <div>
            <img src={img} alt="slider_pics" className="d-block" />
        </div>
    )
}