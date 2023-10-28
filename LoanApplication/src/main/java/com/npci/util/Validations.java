package com.npci.util;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.npci.exceptions.ValidationException;

@Component
public class Validations {
	public boolean checkForEmail(String email) throws ValidationException {
		if ((email.contains("@")) && (email.contains("."))) {
			return true;

		}
		throw new ValidationException("Sorry '.' or '@' is not found in " + email);

	}

	public boolean checkForName(String name) throws ValidationException {
		if (name.length() > 5 && name.length() < 60) {
			return true;
		}
		throw new ValidationException("Sorry " + name + " sholud have more than 5 and less than 60 characters");

	}

	public boolean checkForPhoneNumber(Long phone) throws ValidationException {
		if (phone.toString().length() != 10) {

			throw new ValidationException("Sorry " + phone + " sholud have exact 10 digits");

		}
		return true;
	}

	public boolean checkForPassword(String password) throws ValidationException {
		if (password.length() < 6) {
			throw new ValidationException("Sorry " + password + " sholud have minimum 6 characters");
		}
		if (!(password.contains("@") || password.contains("#") || password.contains("!") || password.contains("~")
				|| password.contains("$") || password.contains("%") || password.contains("^") || password.contains("&")
				|| password.contains("*") || password.contains("(") || password.contains(")") || password.contains("-")
				|| password.contains("+") || password.contains("/") || password.contains(":") || password.contains(".")
				|| password.contains(", ") || password.contains("<") || password.contains(">") || password.contains("?")
				|| password.contains("|"))) {
			throw new ValidationException("password should contains atleaste one special char");
		}
		boolean d = false;
		boolean u = false;
		boolean l = false;
		for (int i = 0; i < password.length(); i++) {
			char ch = password.charAt(i);
			if (Character.isDigit(ch)) {
				d = true;

			}
			if (Character.isUpperCase(ch)) {
				u = true;

			}
			if (Character.isLowerCase(ch)) {
				l = true;

			}

		}
		if (d && u && l) {
			return true;
		}
		throw new ValidationException("password should contains atleast one lowercase,one uppercase,one digit");

	}

	public boolean checkForDob(LocalDate date) throws ValidationException {
		if (date.getYear() > 2005) {
			return true;
		}

		throw new ValidationException("Sorry " + date + " sholud be in past 18 years");

	}

}
