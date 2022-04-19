import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    return (
        <div>
            <h3 className='ser-detail'>Find Your Need</h3>
            <div className='link'>
                <Link to="/checkout">
                    <button className='btn'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;