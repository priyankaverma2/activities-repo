package com.npci.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.bean.CreditScore;
import com.npci.dao.CreditScoreDao;
import com.npci.service.CreditScoreService;

@Service
public class CreditScoreServiceImpl implements CreditScoreService{
	@Autowired
	private CreditScoreDao creditScoreDao;

	@Override
	public CreditScore getCreditScore(String pan) {
		
		return creditScoreDao.findById(pan).get();
	}

}
