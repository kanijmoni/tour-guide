import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='image' src={img} alt=''></img>
            <h4>Name:{name}</h4>
            <h5>Price:{price}</h5>
            <h5>Description:</h5><p>{description}</p>
            <button onClick={() => navigateToCheckout(id)} className='button' >Book:{name}</button>
        </div>
    );
};

export default Service;