import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeDash() {
    const [loanApplications, setLoanApplications] = useState([]);
    const [creditScores, setCreditScores] = useState({}); // State to store credit scores
    

    useEffect(() => {
        // Fetch the list of loan applications
        axios.get('http://localhost:9095/api/veiwApplications')
            .then((response) => {
                const loanApplicationsData = response.data;
                setLoanApplications(loanApplicationsData);
            })
            .catch((error) => {
                console.error('Error fetching loan applications:', error);
            });
    }, []);

    const fetchPanFromId = (customerId) => {
        return axios.get(`http://localhost:9095/api/getPan/${customerId}`)
            .then((response) => {
                const panData = response.data;
                console.log(`PAN number for customer with ID ${customerId}: ${panData.pan}`);
                return panData.pan;
            })
            .catch((error) => {
                console.error('Error fetching PAN number:', error);
                return null;
            });
    };

    const handleAction = (applicationId, status) => {
        axios.post(`http://localhost:9095/api/updateStatus/${applicationId}/${status}`)
            .then((response) => {
                console.log(`Application with ID ${applicationId} is ${status}`);
                // Update the UI by changing the button text
                updateButtonText(applicationId, status);
            })
            .catch((error) => {
                console.error('Error processing the application:', error);
            });
    };

    const handleViewCreditScore = async (customerId) => {
        // Check if the credit score is already fetched for this customer ID
        if (!creditScores[customerId]) {
            // Fetch the PAN number based on the customer ID
            const panNumber = await fetchPanFromId(customerId);

            if (panNumber) {
                // Use the PAN number to fetch the credit score
                axios.get(`http://localhost:9095/api/getCreditScore/${panNumber}`)
                    .then((response) => {
                        const creditScoreData = response.data.score;
                        console.log(`Credit Score for PAN number ${panNumber}: ${creditScoreData}`);
                        // Update the credit score state with the fetched score
                        setCreditScores((prevCreditScores) => ({
                            ...prevCreditScores,
                            [customerId]: creditScoreData,
                        }));
                    })
                    .catch((error) => {
                        console.error('Error fetching credit score:', error);
                    });
            }
        }
    };

    const updateButtonText = (applicationId, status) => {
        // Update the button text based on the status
        setLoanApplications((prevApplications) =>
            prevApplications.map((application) => {
                if (application.id === applicationId) {
                    return {
                        ...application,
                        status: status,
                    };
                }
                return application;
            })
        );
    };

    return (
        <div className="container">
            <h3>Employee Dashboard</h3>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Loan Id</th>
                       
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loanApplications.map((application) => (
                        <tr key={application.id}>
                            <td>{application.id}</td>
                            <td>{application.loanId}</td>
                            
                            <td >
                              
                                <button style={{ width: '100px' }}
                                    className="btn btn-success mx-3"
                                    onClick={() => handleAction(application.id, 'approved')}
                                    disabled={application.status === 'approved'}
                                >
                                    {application.status === 'approved' ? 'Approved' : 'Approve'}
                                </button>
                                <button style={{ width: '100px' }}
                                    className="btn btn-danger mx-3"
                                    onClick={() => handleAction(application.id, 'rejected')}
                                    disabled={application.status === 'rejected'}
                                >
                                    {application.status === 'rejected' ? 'Rejected' : 'Reject'}
                                </button>
                                <button style={{ width: '200px' }}
                                    className="btn btn-primary"
                                    onClick={() => handleViewCreditScore(application.customerId)}
                                >
                                    View Credit Score
                                </button>
                                {creditScores[application.customerId] !== undefined && (
                                    <p  style={{ color: 'blue' }}>Credit Score: {creditScores[application.customerId]}</p>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDash;
