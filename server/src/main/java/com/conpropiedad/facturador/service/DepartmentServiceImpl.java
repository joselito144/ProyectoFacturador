package com.conpropiedad.facturador.service;


import com.conpropiedad.facturador.domain.Department;
import com.conpropiedad.facturador.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartment(String departmentCode) {
        return departmentRepository.findById(departmentCode).orElse(null);
    }

    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public Department updateDepartment(Department department) {
        Department departmentBD = getDepartment(department.getDepartmentCode());
        if(departmentBD == null) {
            return null;
        }
        return departmentRepository.save(departmentBD);
    }

    @Override
    public Department deleteDepartment(String departmentCode) {
        Department departmentBD = getDepartment(departmentCode);
        if(departmentBD == null) {
            return null;
        }
        return departmentRepository.save(departmentBD);
    }

}
