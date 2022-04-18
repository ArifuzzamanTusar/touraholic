import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <Container>
                <div className="py-5">
                    <div className="heading text-center">
                        <h2 className="title">Gallery</h2>
                        <p>Photo gallery of our latest tours </p>

                    </div>
                </div>
                <div className="gallery py-5">
                <Row>
                    <Col md={3} xs={6}  >
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157221/travel/st-martin_rpnjrc.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157221/travel/slider-st-martin_mwxrof.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157221/travel/slider-sreemangal_cvp9uj.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/sreemangal-2_ompkh8.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/sreemangal_eqornf.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/slider-sunderban_ybd01j.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/coxs-bazar-1_lyuxh5.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/sunderban_fev1yd.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157222/travel/nilgiri_wtnzup.webp" alt="" />
                        </div>
                    </Col> 
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157223/travel/bali_p2k5ar.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157223/travel/slider-cox-bazar_aq6if3.webp" alt="" />
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="image">
                            <img className='img-fluid' src="https://res.cloudinary.com/tusar/image/upload/v1650157223/travel/slider-bali_facauz.webp" alt="" />
                        </div>
                    </Col>
                </Row>
                </div>
              
            </Container>
        </div>
    );
};

export default Gallery;