package com.npci.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "loan_application")
public class LoanApplications {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "application_id")
	private int id;
	@Column(name="customer_id")
	private int customerId;
	@Column(name="loan_id")
	private int loanId;
	@Column(name="status")
	private String status;
	
	public LoanApplications(int id, int customerId, int loanId, String status) {
		super();
		this.id = id;
		this.customerId = customerId;
		this.loanId = loanId;
		this.status = status;
	}

	public LoanApplications() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	

}
