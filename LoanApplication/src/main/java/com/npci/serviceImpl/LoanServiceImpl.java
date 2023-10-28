package com.npci.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.bean.Loan;
import com.npci.dao.LoanDao;
import com.npci.service.LoanService;

@Service
public class LoanServiceImpl implements LoanService {
	@Autowired
	private LoanDao loanDao;

	@Override
	public List<Loan> ViewLoans() {
		
		return loanDao.findAll();
	}

	@Override
	public Loan ViewLoans(int id) {
		// TODO Auto-generated method stub
		return loanDao.findById(id).get();
	}
}
