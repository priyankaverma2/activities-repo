import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function LoanStatus() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataParam = searchParams.get('data');
    const [loanApplications, setLoanApplications] = useState([]);
    const [customerId, setCustomerId] = useState();

    useEffect(() => {
        if (dataParam) {
            try {
                const data = JSON.parse(decodeURIComponent(dataParam));
                setCustomerId(parseInt(data));
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        }
    }, [dataParam]); 
   

    useEffect(() => {
     
        axios.get(`http://localhost:9095/api/checkStatus/${customerId}`)
            .then((response) => {
                const loanApplicationsData = response.data;
                setLoanApplications(loanApplicationsData);
            })
            .catch((error) => {
                console.error("Error fetching loan applications:", error);
            });
    }, [customerId]);

    return (
        <div className="container">
            <h3>Loan Application Status</h3>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Loan ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loanApplications.map((loanApp) => (
                        <tr key={loanApp.id}>
                            <td>{loanApp.id}</td>
                            <td>{loanApp.loanId}</td>
                            <td>{loanApp.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LoanStatus