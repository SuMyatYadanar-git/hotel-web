import React from "react";
import Slider from "react-slick";

import bg1 from '../../../images/hotel1.jpg'
import bg2 from '../../../images/hotel2.jpg'
import bg3 from '../../../images/hotel3.jpg'

const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
};

const HomeCarousel = props => {
    const { media } = props

    return (
        <Slider {...settings}>

            <div>  <SliderContent img={bg1} media={media} /></div>
            <div>  <SliderContent img={bg2} media={media} /></div>
            <div>  <SliderContent img={bg3} media={media} /></div>

        </Slider>
    );
}
export default HomeCarousel

const SliderContent = ({ img, media }) => {
    return (
        <div>
            <img src={img}
                alt="slider_pics"
                className=" img-fluid w-100"
                style={{ height: media.desktop ? 800 : media.tablet ? 700: 500 }}
            />
        </div>
    )
}
// media.tablet ? 500 : 700
// import React from 'react'

// import bg1 from '../../../images/hotel_pink.jpg'
// import MySlider from '../../../common/mySlider'

// const HomeCarousel = props => {
//     return (
//  <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
//             <ol class="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div class="carousel-inner ">
//                 <div class="carousel-item active">
//                     <img class="d-block w-100 img-fluid" src={bg1} alt="First slide" />
//                 </div>
//                 <div class="carousel-item">
//                     <img class="d-block w-100 img-fluid" src={bg1} alt="Second slide" />
//                 </div>
//                 <div class="carousel-item">
//                     <img class="d-block w-100 img-fluid" src={bg1} alt="Third slide" />
//                 </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//         </div>
//     )
// }
// export default HomeCarousel
