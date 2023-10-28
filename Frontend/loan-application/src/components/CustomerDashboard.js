import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function CustomerDashboard() {
    const location = useLocation();
    const data = location.state;
    
    const [profile,setProfile]=useState(data);
        return (
        <div className="container">
            <h3>Welcome to Your Dashboard</h3>
            <hr />
            <div>
                <h4>Apply For a Loan</h4>
                <ul>
                    <li>
                    <Link to={{
                            pathname: '/view-loans',
                            search: `?data=${JSON.stringify(profile.id)}`
                        }}>
                            View Loans
                        </Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: '/view-loans',
                            search: `?data=${JSON.stringify(profile.id)}`
                        }}>
                            Apply for a Loan
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Loan Status </h4>
                <ul>
                    <li>
                   <Link to={{
                            pathname: '/loan-status',
                            search: `?data=${JSON.stringify(profile.id)}`
                        }}>
                            Loan Status
                        </Link>
                       
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default CustomerDashboard;
