import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic using the email and password
        console.log('Email:', email);
        console.log('Password:', password);
        navigation('/')

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
                    <button type="submit" disabled={(password.length > 7 && email.length > 10) ? false : true} onClick={handleLogin}>Login</button>
                </form>
                <p>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>
            </div>
        </>
    );
};

export default LoginPage;
