import React from 'react';
import './Pageheader.css'

const Pageheader = (props) => {
    const {title,subtitle} = props;
    return (
        <div className='page-header py-5'>
                <div className="container page-title text-center">
                    <h2 className='title'>{title}</h2>
                    <p className='subtitle'>{subtitle}</p>
                </div>
        </div>
    );
};

export default Pageheader;