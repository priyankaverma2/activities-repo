import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [pan, setPan] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstnameError, setFirstnameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const [panError, setPanError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        const phonePattern = /^\d{10}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

        
        setEmailError('');
        setPasswordError('');
        setFirstnameError('');
        setLastnameError('');
        setPhoneNumError('');
        setPanError('');

        if (!emailId || !emailPattern.test(emailId)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        if (!password || !passwordPattern.test(password)) {
            setPasswordError('Password should have at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&+=)');
            return;
        }

        if (!firstname || firstname.length < 3) {
            setFirstnameError('First Name should be at least 3 characters long');
            return;
        }

        if (!lastname.length < 1) {
            setLastnameError('Last Name is required');
            return;
        }

        if (!phoneNum || !phonePattern.test(phoneNum)) {
            setPhoneNumError('Please enter a valid 10-digit phone number');
            return;
        }

        if (!pan) {
            setPanError('PAN is required');
            return;
        }
        axios.post("http://localhost:9095/api/saveCustomer", {
            "firstName": firstname,
            "lastName": lastname,
            "emailId": emailId,
            "password": password,
            "phone": phoneNum,
            "pan": pan
        })
        .then((response) => {
            console.log(response);
            navigate('/login');
        })
        .catch((error) => {
            alert(error.data.error);
            console.log(error);
            navigate('/register');
        });
    }

    return (
        <div className="container">
            <h3>Registration Form</h3> <hr />
            <form onSubmit={handleSubmit}>
               
                <div className="w-25 mb-3">
                    <label>Enter your Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={emailId}
                        onChange={e => setEmailId(e.target.value)}
                        required
                    />
                    <div className="error-message">{emailError}</div>
                </div>
               
                <div className="w-25 mb-3">
                    <label>Enter your Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <div className="error-message">{passwordError}</div>
                </div>
              
                <div className="w-25 mb-3">
                    <label>Enter your First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={e => setFirstName(e.target.value)}
                        required
                        minLength="3"
                    />
                    <div className="error-message">{firstnameError}</div>
                </div>
               
                <div className="w-25 mb-3">
                    <label>Enter your Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        required
                    />
                    <div className="error-message">{lastnameError}</div>
                </div>
               
                <div className="w-25 mb-3">
                    <label>Enter your Phone No. (10 digits):</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phoneNum}
                        onChange={e => setPhoneNum(e.target.value)}
                        required
                        minLength="10"
                        maxLength="10"
                    />
                    <div className="error-message">{phoneNumError}</div>
                </div>
                
                <div className="w-25 mb-3">
                    <label>Enter your PAN :</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pan}
                        onChange={e => setPan(e.target.value)}
                        required
                    />
                    <div className="error-message">{panError}</div>
                </div>

                <div>
                    <input type="submit" className="btn btn-secondary mb-3" value='Register' />
                </div>
            </form>
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Registration;
