import React from 'react';
import notFound from '../../../images/notFound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h2 className=''>NotFound</h2>
            <img src={notFound} alt='' />
        </div>
    );
};

export default NotFound;