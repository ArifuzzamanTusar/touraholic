import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pageheader from '../../Global/Pageheader/Pageheader';

const About = () => {
    return (
        <div id='page-about'>
            <Pageheader title={"About"} subtitle={"About Page"} ></Pageheader>
            <Container>
                <div className="pt-5">
                    <Row>
                        <Col md={5}>
                            <div className="image">
                                <img className='img-fluid' src="https://arifuzzamantusar.com/wp-content/uploads/2021/04/IMG-20191208-WA0045-01-731x1024.png" alt="" />
                            </div>
                        </Col>
                        <Col md={7} className="d-flex justify-content-center align-items-center">
                            
                            <div className="about-me py-5">
                            <p>As-salamu alaykum</p>
                            <h4>I'm</h4>
                                <h2>Arifuzzaman Tusar</h2>
                                <p>
                                    Dream's to became a Perfect Full Stack Developer and The target is to become a frontend developer within 2022. Recently I have completed my B.Sc. Engineering in computer science. And Admitted for M.Sc in CSE. Now, I am fully focusing on my skill development journey with MERN Stack roadmap. I'm practicing each and everyday to learn something new related to Frontend Development. 
                                </p>
                                <p>
                                After Finishing my first goal of being Frontend Developer, I'll move forward to learn Nodejs for backend and day to day programming problem solving. Besides, Iill try to learn advance PHP and Wordpress Hooks, Filter to develop features. From the love for wordpress, Its a wish to build some wordpress plugins with vue.js and fully stacked react web-app and react-native app from wordpress CMS Restful API's. N.b. Im a noob WP developer :P
                                </p>
                                <p>Its a big dream holding on my heart to be a successive developer. Pray for my "health"</p>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;