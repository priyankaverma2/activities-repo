import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function LoanList() {
    const [loans, setLoans] = useState([]);
    const [customerId, setCustomerID] = useState(null);
    const [appliedLoans, setAppliedLoans] = useState(new Set()); // Track applied loans
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dataParam = searchParams.get('data');

    useEffect(() => {
        if (dataParam) {
            try {
                const data = JSON.parse(decodeURIComponent(dataParam));
                setCustomerID(parseInt(data));
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        }
    }, [dataParam]);

    useEffect(() => {
        // Fetch loan data from your API
        axios.get("http://localhost:9095/api/viewLoans")
            .then((response) => {
                const loanData = response.data;
                setLoans(loanData);
            })
            .catch((error) => {
                console.error("Error fetching loan data:", error);
            });
    }, []);

    const handleApplyForLoan = (customerID, loanID) => {
        const apiUrl = `http://localhost:9095/api/applyLoan/${customerID}/${loanID}`;

        axios.post(apiUrl)
            .then((response) => {
                const data = response.data;
                // Mark the loan as applied
                setAppliedLoans((prevAppliedLoans) => new Set(prevAppliedLoans).add(loanID));
            })
            .catch((error) => {
                console.error("Error applying for a loan:", error);
            });
    }

    const isLoanApplied = (loanID) => appliedLoans.has(loanID);

    return (
        <div className="container">
            <h3>Loan List</h3>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Loan Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <tr key={loan.id}>
                            <td>{loan.id}</td>
                            <td><b>{loan.loanType}</b> with 10% rate and 1 year time</td>
                            <td>
                                {isLoanApplied(loan.id) ? (
                                    <button className="btn btn-secondary" disabled>Applied</button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleApplyForLoan(customerId, loan.id)}
                                    >
                                        Apply for Loan
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LoanList;
