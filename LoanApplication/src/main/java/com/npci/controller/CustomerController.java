package com.npci.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.bean.Customer;
import com.npci.exceptions.AuthenticationException;
import com.npci.service.CustomerService;
import com.npci.util.LoginParams;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class CustomerController {
	Map<String, String> map = new HashMap<>();
	Map<String, String> exceptions = new HashMap<>();
	@Autowired
	private CustomerService customerService;
	
	@PostMapping(path="/saveCustomer", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> save(@RequestBody Customer cust){
		return ResponseEntity.status(201).body(customerService.save(cust));
	}
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody LoginParams params) {
		try {
			return ResponseEntity.status(200).body(customerService.login(params));
		} catch (AuthenticationException e) {
			map.put("error", e.getMessage());
			exceptions.put("login", e.getMessage());
			return ResponseEntity.status(401).body(map);
		}

	}
	@GetMapping(path="/getPan/{id}")
	public ResponseEntity<Object> getPan(@PathVariable("id") int id){
		return ResponseEntity.status(201).body(customerService.getPan(id));
	}
	
	
	

}
