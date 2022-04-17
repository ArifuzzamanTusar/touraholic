import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex">
                <div className="col-5"><hr /></div>
                <div className="col-2 text-center py-1">OR</div>
                <div className="col-5"><hr /></div>
            </div>
            
            <p className="text-center">Continue With,</p>
            <div className="d-flex justify-content-center alignment-items-center">
                <div className="m-2 social-login google">
                    <FaGoogle />
                </div>
                <div className="m-2 social-login facebook">
                    <FaFacebookF />
                </div>
            </div>
            
        </div>
    );
};

export default SocialLogin;