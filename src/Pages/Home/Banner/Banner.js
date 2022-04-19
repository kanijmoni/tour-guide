import React from 'react';
import travel from '../../../images/travel.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <h1 className='title'>Tourist Destination!</h1>
            </div>
            <div>
                <img src={travel} alt=''></img>
            </div>
        </div>

    );
};

export default Banner;