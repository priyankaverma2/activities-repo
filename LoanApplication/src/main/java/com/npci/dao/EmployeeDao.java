package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.npci.bean.Employee;



public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	@Query("select e from Employee e where e.emailId=?1")
	public Employee login(String email);

}
