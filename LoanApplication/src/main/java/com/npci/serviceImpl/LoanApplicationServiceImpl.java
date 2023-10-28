package com.npci.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.bean.LoanApplications;
import com.npci.dao.LoanApplicationDao;
import com.npci.service.LoanApplicationService;

@Service
public class LoanApplicationServiceImpl implements LoanApplicationService {
	@Autowired
	private LoanApplicationDao loanApplicationDao;

	@Override
	public LoanApplications applyLoan(int customerId, int loanId) {
		LoanApplications loanApplication=new LoanApplications();
		loanApplication.setCustomerId(customerId);
		loanApplication.setLoanId(loanId);
		loanApplication.setStatus("Pending");
		return loanApplicationDao.save(loanApplication);
	}

	@Override
	public List<LoanApplications> checkStatus(int customerId) {
		
	 return loanApplicationDao.checkStatus(customerId);
	}

	@Override
	public List<LoanApplications> veiwApplications() {
		
		return loanApplicationDao.findAll();
	}

	@Override
	public LoanApplications updateStatus(int id, String staus) {
		LoanApplications loanApp=loanApplicationDao.findById(id).get();
		loanApp.setStatus(staus);
		
		return loanApplicationDao.save(loanApp);
	}

}
