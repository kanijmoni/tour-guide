import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>Find Your Need:{serviceId}</h3>
        </div>
    );
};

export default Checkout;