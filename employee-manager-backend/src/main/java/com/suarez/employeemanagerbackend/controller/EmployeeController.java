package com.suarez.employeemanagerbackend.controller;

import com.suarez.employeemanagerbackend.exception.ResourceNotFoundException;
import com.suarez.employeemanagerbackend.model.Employee;
import com.suarez.employeemanagerbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if(employeeOptional.isEmpty()) {
            throw new ResourceNotFoundException("Employee with Id: " + id + " does not exist.");
        } else {
            return employeeOptional.get();
        }
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee) {
        //TODO: Add validation
        return employeeRepository.save(employee);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
}
