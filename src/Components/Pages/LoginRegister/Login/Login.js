
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../utilities/Loading';

import "../LoginSignup.css";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [formerror, setFormError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)

    }
    const handlePassword = (event) => {
        setPassword(event.target.value)

    }


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

  
     
      if (loading) {
          return (
              <Loading></Loading>
          )
      }
      if (error) {
          toast.error(error.message);
      }


      const handleLogin = async (event) =>{
            event.preventDefault();
            if (email && password) {
                await signInWithEmailAndPassword(email,password);
            }
            else{
                setFormError(
                    <p className='bg-danger text-white p-3'>Please Check Errors</p>
                )
            }
      }
      if (user) {
        navigate(from, { replace: true })
    }

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
                                
                                <form  onSubmit={handleLogin} >
                                    <label> Email</label>
                                    <input type="email"  required onBlur={handleEmail}/>
                                    <label> Pasword</label>
                                    <input type="password"   onBlur={handlePassword} />


                                    <Button type='submit' className='Log_in col-12 my-3'>Login</Button>
                                    
                                </form>
                                {formerror}

                                <SocialLogin></SocialLogin>
                                <div className="p-3"></div>
                                <Row>
                                    <Col md={6}>
                                        <div className='text-center'>Forgot password?</div> 
                                        <Link className='nav-link text-white text-center text-decoration-underline ' to={"/reset-password"}>Reset Now</Link>
                                    </Col>
                                    <Col md={6}>
                                    <div className='text-center'>Dont have an account?</div> 
                                        <Link className='nav-link text-white text-center text-decoration-underline' to={"/register"}>Create New Account</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Container>
            </div>
           
        </div>
    );
};

export default Login;