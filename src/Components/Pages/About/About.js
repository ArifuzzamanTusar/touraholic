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
                                    I want to be a Full Stack Web Developer. Recently I have completed my B.Sc. Engineering in computer science. Now I am focusing on my skill development with react js. I work each and everyday to learn something new related to react. after learning react I will will learn Nodejs and Laravel for backend and VueJs also for frontend. I will all my effort to become a full stack developer as soon as possible.. thank you
                                </p>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;