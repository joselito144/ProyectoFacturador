package com.conpropiedad.facturador.service;

import com.conpropiedad.facturador.domain.Department;

import java.util.List;

public interface DepartmentService {

    List<Department> getAllDepartments();
    Department getDepartment(String departmentCode);
    Department createDepartment(Department department);
    Department updateDepartment(Department department);
    Department deleteDepartment(String departmentCode);
}
