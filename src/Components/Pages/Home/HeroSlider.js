import React from 'react';
import "./Heroslider.css"
import { Carousel } from 'react-bootstrap';

// import { BsArrowRight } from "react-icons/bs";

const HeroSlider = () => {
    return (

        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/slider-sunderban_ybd01j.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>Welcome to Touraholic</h2>
                            <h4 className='slider_subtitle'> Your Trusted Travel Partner</h4>
                            <p className='col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea ratione quod quae facilis quam sed explicabo, nemo, temporibus maiores eaque dolor voluptatem laudantium numquam alias adipisci impedit porro modi!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/slider-sunderban_ybd01j.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>Sunderban Mangrove</h2>
                            <h4 className='slider_subtitle'> Adventure the largest mangrove forest</h4>
                            <p className='col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea ratione quod quae facilis quam sed explicabo, nemo, temporibus maiores eaque dolor voluptatem laudantium numquam alias adipisci impedit porro modi!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://res.cloudinary.com/tusar/image/upload/v1650157221/travel/slider-st-martin_mwxrof.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>St. Martin's Island</h2>
                            <h4 className='slider_subtitle'> Discover the beauty of the only coral reef island in Bangladesh</h4>
                            <p className='col-md-6'>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://res.cloudinary.com/tusar/image/upload/v1650157224/travel/slider-sajhek_q4spvi.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>TITLE</h2>
                            <h4 className='slider_subtitle'> Subtitle</h4>
                            <p className='col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea ratione quod quae facilis quam sed explicabo, nemo, temporibus maiores eaque dolor voluptatem laudantium numquam alias adipisci impedit porro modi!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://res.cloudinary.com/tusar/image/upload/v1650157223/travel/slider-bali_facauz.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>TITLE</h2>
                            <h4 className='slider_subtitle'> Subtitle</h4>
                            <p className='col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea ratione quod quae facilis quam sed explicabo, nemo, temporibus maiores eaque dolor voluptatem laudantium numquam alias adipisci impedit porro modi!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>




            </Carousel>
        </div>

    );
};

export default HeroSlider;