import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <header className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/aboutme">About Me</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>sign out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </header>
    );
};

export default Header;