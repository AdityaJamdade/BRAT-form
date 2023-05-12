import './FormPage.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'

const BASE_API = 'http://localhost:8000/api/user/profile'

const Form = () => {
    const [stage, setStage] = useState(1);
    const [validationErrors, setValidationErrors] = useState({});
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        mobNo: '',
        fatherName: '',
        motherName: '',
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
        validateValues()
    };

    const validateValues = () => {

        let isValid = true;
        const errors = {};

        // Validate mobile number (mobNo)
        if (formValues.mobNo.trim() === "") {
            isValid = false;
            errors.mobNo = "Mobile number is required.";
        }

        // Validate name
        const nameWithoutSpaces = formValues.name.replace(/\s/g, '');
        // if (formValues.name.trim() === "") {
        //     isValid = false;
        //     errors.name = "Name is required.";
        // }
        if (nameWithoutSpaces === '') {
            isValid = false;
            errors.name = "Name is required.";
        }

        // Validate email
        // const emailRegex = /^\S+@\S+\.\S+$/;
        if (formValues.email.trim() === "") {
            isValid = false;
            errors.email = "Email is required.";
        }
        else {
            var pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
            if (!pattern.test(formValues.email)) {
                isValid = false;
                errors.email = "Please enter valid email address.";
            }
            isValid = true;
            errors.email = "";
        }
        // else if (!emailRegex.test(formValues.email.trim())) {
        //     isValid = false;
        //     errors.email = "Invalid email address.";
        // }

        // Validate date of birth (dob)
        const currentDate = new Date();
        const minAgeDate = new Date();
        minAgeDate.setFullYear(currentDate.getFullYear() - 18);
        const selectedDate = new Date(formValues.dob);
        if (selectedDate > minAgeDate) {
            isValid = false;
            errors.dob = "You must be at least 18 years old.";
        }

        setValidationErrors(errors)
        return { isValid, errors };
    }

    const [photo, setPhoto] = useState(null);
    const [signature, setSignature] = useState(null);
    const [aadhar, setAadhar] = useState(null);

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    }

    const handleSignature = (e) => {
        const file = e.target.files[0];
        setSignature(file);
    }

    const handleAadhar = (e) => {
        const file = e.target.files[0];
        setAadhar(file);
    }
    const handleNext = async () => {
        if (stage === 1) {
            const success = await handleSubmit();
            if (success) {
                setStage((prevStage) => prevStage + 1);
            }
        }
        else if (stage === 2) {
            setStage((prevStage) => prevStage + 1);
        }
    };
    const handlePrev = () => {
        setStage((prevStage) => prevStage - 1);
    };

    const handleSubmit = async () => {
        console.log(formValues);
        console.log('photo', photo);
        console.log('signature', signature);
        console.log('aadhar', aadhar);

        const response = await axios.post(BASE_API, formValues);
        console.log(response.data)

        return response.data.success
    }

    const renderStageContent = () => {
        switch (stage) {
            case 1:
                return (
                    <>
                        <Navbar />
                        <div className="stage-1">

                            <div className='form'>
                                {/* Stage 1: Personal Details */}
                                <h2>Stage 1: Personal Details</h2>
                                {/* Personal details form fields */}
                                <div className="input-container ">
                                    <label htmlFor="name">Name</label>
                                    <input className='' type="text" name="name" value={formValues.name} onChange={handleChange} />
                                    {validationErrors.name && <p className="error">{validationErrors.name}</p>}
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' value={formValues.email} onChange={handleChange} />
                                    {validationErrors.email && <p className="error">{validationErrors.email}</p>}
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
                                    {validationErrors.dob && <p className="error">{validationErrors.dob}</p>}
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
                            <div className='stage-2'>

                                <div className="file-input">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="file" name="photo" id='photoFile' onChange={handlePhoto} />
                                    {photo && (
                                        <div className="file-info">
                                            <p>Chosen file: {photo.name}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="file-input">
                                    <label htmlFor="signature">Signature</label>
                                    <input type="file" name="signature" id='signatureFile' onChange={handleSignature} />
                                    {signature && (
                                        <div className="file-info">
                                            <p>Chosen file: {signature.name}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="file-input">
                                    <label htmlFor="aadhar">Aadhar card</label>
                                    <input type="file" name="aadhar" id='aadharFile' onChange={handleAadhar} />
                                    {aadhar && (
                                        <div className="file-info">
                                            <p>Chosen file: {aadhar.name}</p>
                                        </div>
                                    )}
                                </div>
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
                            <h3>{formValues.name.split(' ')[0]}, now you can login using the credentials we sent you through Email</h3>
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
