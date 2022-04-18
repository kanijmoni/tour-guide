import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name'></input><br />
                <input type='email' name='email' id='' placeholder='Email Address' required></input><br />
                <input type='password' name='password' id='' placeholder='Password' required></input><br />
                <input type="submit" value="Register"></input>
            </form>
            <p>Already have an acount?<Link to='/login' className='register' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;