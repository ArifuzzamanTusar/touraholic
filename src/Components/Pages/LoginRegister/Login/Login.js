
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "../LoginSignup.css";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div id='page-login'>
            <div className='login-reg py-5'>
                <Container >
                    <Row>
                        <Col md={7} className="d-flex align-items-center"> 
                            <h2 className='title'>Login to your Account</h2>
                        
                        </Col>
                        <Col md={5}>
                            <div className="form-body">
                                
                                <form >
                                    <label> Email</label>
                                    <input type="email"  required/>
                                    <label> Pasword</label>
                                    <input type="password"  required/>


                                    <Button className='Log_in col-12 my-3'>Login</Button>
                                    
                                </form>

                                <SocialLogin></SocialLogin>
                                <div className="p-3"></div>
                                <Row>
                                    <Col md={6}>
                                        <div className='text-center'>Forgot password?</div> 
                                        <Link className='nav-link text-white text-center text-decoration-underline ' to={"/forgot-password"}>Reset Now</Link>
                                    </Col>
                                    <Col md={6}>
                                    <div className='text-center'>Dont have an account?</div> 
                                        <Link className='nav-link text-white text-center text-decoration-underline' to={"/register"}>Create New Account</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </div>
    );
};

export default Login;