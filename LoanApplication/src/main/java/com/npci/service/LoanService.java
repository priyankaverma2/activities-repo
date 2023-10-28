package com.npci.service;

import java.util.List;

import com.npci.bean.Loan;

public interface LoanService {
	
	public List<Loan> ViewLoans();

	public Loan ViewLoans(int id);



}
