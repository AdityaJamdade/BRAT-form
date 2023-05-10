import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './FormPage.css'

const Form = () => {
    const [stage, setStage] = useState(1);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        mobNo:'',
        fatherName:'',
        motherName:'',
        dob: '',
        gender: '',
        country: '',
        state: '',
        city: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };


    const handleNext = () => {
        setStage((prevStage) => prevStage + 1);
        console.log(formValues)
    };
    const handlePrev = () => {
        setStage((prevStage) => prevStage - 1);
    };

    const renderStageContent = () => {
        switch (stage) {
            case 1:
                return (
                    <>
                        <Navbar />
                        <div className='form'>
                            {/* Stage 1: Personal Details */}
                            <h2>Stage 1: Personal Details</h2>
                            {/* Personal details form fields */}
                            <div className="input-container ">
                                <label htmlFor="name">Name</label>
                                <input className='' type="text" name="name" value={formValues.name} onChange={handleChange} />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={formValues.email} onChange={handleChange} />
                            </div>
                            <div className='input-container'>
                                <label htmlFor="mobNo">Mobile No.</label>
                                <input type="email" name='mobNo' value={formValues.mobNo} onChange={handleChange} />
                            </div>
                            <div className="input-container ">
                                <label htmlFor="fatherName">Father's Name</label>
                                <input className='' type="text" name="fatherName" 
                                value={formValues.fatherName} onChange={handleChange}
                                 />
                            </div>
                            <div className="input-container ">
                                <label htmlFor="motherName">Mother's Name</label>
                                <input className='' type="text" name="motherName" 
                                value={formValues.motherName} onChange={handleChange}
                                 />
                            </div>
                            <div className="input-container">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" id="date" name="dob"
                                    value={formValues.dob} onChange={handleChange}
                                 />
                            </div>

                            <div className="input-container">
                                <label htmlFor="gender">Gender</label>
                                <select className='select-option' id="gender" name="gender" 
                                    value={formValues.gender} onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                    <option value="T">T</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" name="country" 
                                    value={formValues.country} onChange={handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state"
                                    value={formValues.state} onChange={handleChange}
                                 />
                            </div>
                            <div className="input-container">
                                <label htmlFor="city">City</label>
                                <input type="text" id="state" name="city"
                                    value={formValues.city} onChange={handleChange}
                                 />
                            </div>

                            <div className="input-container">
                                <label htmlFor="address">Address</label>
                                <input id="address" name="address" type='text' 
                                    value={formValues.address} onChange={handleChange}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="pincode">Pin Code</label>
                                <input type="text" id="pincode" name="pincode" 
                                    value={formValues.pincode} onChange={handleChange}
                                />
                            </div>
                            {/* Next button */}
                            <div className="button-container">
                                <button className='button' onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <Navbar />
                        <div className='form' >
                            {/* Stage 2: Document Uploading */}
                            <h2>Stage 2: Document Uploading</h2>
                            {/* Document uploading form fields */}
                            <div className="file-input">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" name="photo" />
                            </div>
                            <div className="file-input">
                                <label htmlFor="signature">Signature</label>
                                <input type="file" name="signature" />
                            </div>
                            {/* Next button */}
                            <div className="button-container">
                                <button className='button' onClick={handlePrev}>Previous</button>
                                <button className='button' onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <Navbar />
                        <div className='form button-container'>
                            {/* Stage 3: Thank You Page */}
                            <h2>Thank You</h2>
                            <h3>Aditya, now you can login using the credentials we sent you through Email</h3>
                            <div className="button-container">
                                {/* <button className='button' onClick={handlePrev}>Previous</button> */}
                                {/* Button to redirect to login page */}
                                <Link to="/login">
                                    <button className='button'>Go to Login</button>
                                </Link>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Status bar */}
            <div className="form-container">
                <div>
                    <div className={`status-bar ${stage >= 1 ? 'active' : ''}`}>Personal Details</div>
                    <div className={`status-bar ${stage >= 2 ? 'active' : ''}`}>Document Uploading</div>
                    <div className={`status-bar ${stage >= 3 ? 'active' : ''}`}>Thank You</div>
                </div>
                {/* Render current stage content */}
                {renderStageContent()}
            </div>
        </div>
    );
};

export default Form;
