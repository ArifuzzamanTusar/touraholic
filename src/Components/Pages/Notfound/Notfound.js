import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Notfound.css'

const Notfound = () => {
    return (
        <div>
               <Container>
                   <div className="py-5 d-flex justify-content-center align-items-center">
                       <div className="not-found text-center">
                           <h1>404 | PAGE NOT FOUND</h1>
                           <div className="p-5"></div>
                           <Link className='btn btn-outline-light' to={'/'}>Back To Home</Link>
                       </div>
                   </div>
               </Container>
        </div>
    );
};

export default Notfound;