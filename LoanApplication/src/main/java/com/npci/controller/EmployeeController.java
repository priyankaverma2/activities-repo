package com.npci.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.exceptions.AuthenticationException;
import com.npci.service.EmployeeService;
import com.npci.util.LoginParams;

@RestController
@RequestMapping(path="/api")
@CrossOrigin("*")
public class EmployeeController {
	Map<String, String> map = new HashMap<>();
	Map<String, String> exceptions = new HashMap<>();
	@Autowired
	private EmployeeService employeeService;
	@PostMapping(path = "/loginEmployee", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody LoginParams params) {
		try {
			return ResponseEntity.status(200).body(employeeService.login(params));
		} catch (AuthenticationException e) {
			map.put("error", e.getMessage());
			exceptions.put("login", e.getMessage());
			return ResponseEntity.status(401).body(map);
		}

	}

}
