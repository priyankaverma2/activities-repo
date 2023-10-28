import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function CustomerLogIn() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        let d;
        e.preventDefault();
        axios.post("http://localhost:9095/api/login",
            {
                "email": emailId,
                "password": password
            }
        )
            .then((response) => {
                console.log(response)
                d = response.data;

            }

            ).then(() => {
                navigate('/CustomerDashboard/' + emailId, { state: d });
            }
            )
            .catch((error) => {
                // alert(error);
                console.log(error)
                console.log(error);
                if (error.response && error.response.status === 401) {
                    setLoginError("Unauthorized login attempt. Please check your email and password.");
                } else {
                    setLoginError("An error occurred during login.");
                }
                navigate('/login');
            }
            );
    }

    return (
        <div className="container">
            <h3>Login Form</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="w-25 mb-3">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="form-control"
                        value={emailId}
                        onChange={e => setEmailId(e.target.value)}
                        required
                    />
                </div>
                <div className="w-25 mb-3">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {loginError && <div className="alert alert-danger">{loginError}</div>}
                <div>
                    <input type="submit" className="btn btn-secondary mb-3" value="Login" />
                </div>
            </form>
            <div>
                <Link to="/register" className='mx-3'>Registration</Link> 
                <Link to="/EmployeeLogin">Login as Employee</Link>
            </div>
        </div>
    );
}

export default CustomerLogIn;
