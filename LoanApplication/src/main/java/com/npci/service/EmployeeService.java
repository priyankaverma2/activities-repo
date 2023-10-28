package com.npci.service;

import com.npci.bean.Employee;
import com.npci.exceptions.AuthenticationException;
import com.npci.util.LoginParams;

public interface EmployeeService {

  public Employee login(LoginParams params) throws AuthenticationException;

}
