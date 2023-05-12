import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from '../components/Navbar'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // we have to use an API or a service like AWS SES to send the OTP
    console.log('Sending OTP to email:', email);
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Implement the logic to verify the entered OTP with the one from the server
    // If the OTP is verified, set the otpVerified flag to true
    console.log('Verifying OTP:', otp);
    setOtpVerified(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement the logic to reset the password using the new password and confirm password
    console.log('Resetting password:', newPassword);
  };

  return (
    <>
    <Navbar />
      <div className="login-page"> {/* Apply the login-page class */}
        <h2>Forgot Password</h2>
        {!otpSent && (
          <form onSubmit={handleSendOtp}>
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
            <button type="submit">Send OTP</button>
          </form>
        )}
        {otpSent && !otpVerified && (
          <form onSubmit={handleVerifyOtp}>
            <label>
              OTP:
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <p className='small-text'>sent to : {email}</p>
            </label>
            <br />
            <button type="submit">Verify OTP</button>
          </form>
        )}
        {otpVerified && (
          <form onSubmit={handleResetPassword}>
            <label>
              New Password:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Confirm New Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" disabled={(newPassword.length === 0) || (newPassword !== confirmPassword)}>Reset Password</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ForgotPasswordPage;
