package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.npci.bean.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer> {
	@Query("select c from Customer c where c.emailId=?1")
	public Customer login(String email);
	@Query("select c from Customer c where c.id=?1")
	public Customer getPan(int id);

}
