package com.npci.util;

import org.springframework.stereotype.Component;

@Component
public class LoginParams {
	private String email;
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LoginParams() {
		super();
	}

	public LoginParams(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

}
