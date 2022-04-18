import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/login">Login</Link>
        </header>
    );
};

export default Header;