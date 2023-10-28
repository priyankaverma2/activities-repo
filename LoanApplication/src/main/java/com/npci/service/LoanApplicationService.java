package com.npci.service;

import java.util.List;

import com.npci.bean.LoanApplications;

public interface LoanApplicationService {

	public LoanApplications applyLoan(int customerId, int loanId);

	public List<LoanApplications> checkStatus(int customerId);

	public List<LoanApplications> veiwApplications();

	public LoanApplications updateStatus(int id, String staus);

}
