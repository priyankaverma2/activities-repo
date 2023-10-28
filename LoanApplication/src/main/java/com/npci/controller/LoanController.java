package com.npci.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.service.LoanService;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class LoanController {
	@Autowired
	private LoanService loanService;
	@GetMapping(path="/viewLoans")
	public ResponseEntity<Object> ViewLoans(){
		return ResponseEntity.status(200).body(loanService.ViewLoans());
	}
	@GetMapping(path="/viewLoan/{id}")
	public ResponseEntity<Object> ViewLoans(@PathVariable("id") int id){
		return ResponseEntity.status(200).body(loanService.ViewLoans( id));
	}
	
}
