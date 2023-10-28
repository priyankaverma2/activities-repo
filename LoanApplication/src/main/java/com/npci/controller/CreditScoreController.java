package com.npci.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.service.CreditScoreService;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class CreditScoreController {
	@Autowired
	private CreditScoreService creditScoreService;
	@GetMapping(path="/getCreditScore/{pan}")
	public ResponseEntity<Object> getCreditScore(@PathVariable("pan") String pan){
		return ResponseEntity.status(200).body(creditScoreService.getCreditScore(pan));
	}

}
