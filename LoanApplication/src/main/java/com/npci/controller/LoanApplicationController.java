package com.npci.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.service.LoanApplicationService;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class LoanApplicationController {
	@Autowired
	private LoanApplicationService loanApplicationService;
	@PostMapping(path="/applyLoan/{customerId}/{loanId}")
	public ResponseEntity<Object> applyLoan(@PathVariable("customerId") int customerId,@PathVariable("loanId")int loanId){
		return ResponseEntity.status(201).body(loanApplicationService.applyLoan(customerId,loanId));
	}
	@GetMapping(path="/checkStatus/{customerId}")
	public ResponseEntity<Object> checkStatus(@PathVariable("customerId") int customerId){
		return ResponseEntity.status(200).body(loanApplicationService.checkStatus(customerId));
	}
	@GetMapping(path="/veiwApplications")
	public ResponseEntity<Object> veiwApplications(){
		return ResponseEntity.status(200).body(loanApplicationService.veiwApplications());
	}
	@PostMapping(path="/updateStatus/{id}/{staus}")
	public ResponseEntity<Object> updateStatus(@PathVariable("id") int id,@PathVariable("staus")String staus){
		return ResponseEntity.status(201).body(loanApplicationService.updateStatus(id,staus));
	}

}
