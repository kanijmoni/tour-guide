import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt=''></img>
            <h4>Name:{name}</h4>
            <h5>Price:{price}</h5>
            <h5>Description:</h5><p>{description}</p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;