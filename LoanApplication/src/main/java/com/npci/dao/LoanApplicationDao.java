package com.npci.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.npci.bean.LoanApplications;

public interface LoanApplicationDao extends JpaRepository<LoanApplications,Integer> {
	
	@Query("select lp from LoanApplications lp where lp.customerId=?1" )
	public List<LoanApplications> checkStatus(int customerId);

}
