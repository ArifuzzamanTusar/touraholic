import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar , FaClock, FaUsers } from "react-icons/fa";

import "./Tourloop.css"
const Tourloop = (props) => {
    const { id, name, image, rating, country, short_disc } = props.data;

    return (
        <Col md={4} id={"loop_" + id}>
            <div className="tour_loop my-3">
                <div className="tour_image">
                    <img className='img-fluid' src={image} alt="" />
                    <div className="rating info"> <FaStar /> {rating ? rating : "5.0"}</div>
                    <div className="country info"><FaMapMarkerAlt /> {country ? country : "unknown"}</div>

                </div>
                <div className="options col-8 mx-auto">
                    <div className="p-2  d-flex justify-content-between align-items-center">
                        <div className="person px-2"> <FaClock/>&nbsp; 3 days</div>
                        <div className="divide"></div>
                        <div className="days px-2"> <FaUsers/>&nbsp;  4</div>
                    </div>
                </div>

                <div className="tour_body text-center p-3" >
                    <h3 className='py-3'>{name}</h3>
                    <p> {short_disc }</p>

                    <Button className='book_now col-6 my-3'>Book Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default Tourloop;