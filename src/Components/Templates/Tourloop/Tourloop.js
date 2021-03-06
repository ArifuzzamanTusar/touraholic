import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "./Tourloop.css"
const Tourloop = (props) => {
    const { id, name, image, rating, country, short_disc, Price,day,night,user } = props.data;
    const navigate = useNavigate();
    const handleCheckout = (tourid) => {
        // console.log(tourid);
        const url = '/checkout/' + tourid;
        navigate(url);
    }

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
                        <div title={day+" Days and "+night+" Nights"} className="person px-2"> <FaClock />&nbsp; {day}D | {night}N </div>
                        <div className="divide"></div>
                        <div className="days px-2"> <FaUsers />&nbsp;  {user}</div>
                    </div>
                </div>

                <div className="tour_body text-center p-3" >
                    <h3 className='py-3'>{name}</h3>
                    <p> {short_disc}</p>
                    <div className="price">
                        <span className='h4'>{Price} TK /</span>
                        <small>person</small>
                    </div>

                    <Button onClick={() => handleCheckout(id)} className='book_now col-6 my-3'>Book Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default Tourloop;