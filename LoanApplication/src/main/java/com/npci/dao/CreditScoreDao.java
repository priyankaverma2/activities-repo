package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.npci.bean.CreditScore;

public interface CreditScoreDao extends JpaRepository<CreditScore, String> {

}
