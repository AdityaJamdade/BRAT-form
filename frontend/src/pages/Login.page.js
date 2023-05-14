import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LoginPage.css';
import axios from 'axios';

const BASE_API = 'http://localhost:8000/api/user'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate()
    const handleLogin = async (e) => {
        console.log('Login')
        e.preventDefault();
        try {
            console.log('Login try', BASE_API + '/login')
            const response = await axios.post(BASE_API + '/login', {
                email,
                password
            });
            console.log('Login response', response.data)
            navigation('/dashboard');
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            alert('Invalid credentials')
            console.error('An error occurred during login:', error?.response);
            setPassword('');
            setEmail('');
        }
    };


    const handleForgotPassword = () => {
        // Implement the logic to send a reset password email to the user
        // we can use an API or a service like AWS SES to send the email
        console.log('Forgot password');
    };

    return (
        <>
            <Navbar />
            <div className="login-page">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit" disabled={(password.length > 7 && email.length > 10) ? false : true}>Login</button>
                </form>
                <p>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>
            </div>
        </>
    );
};

export default LoginPage;
