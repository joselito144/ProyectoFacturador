package com.conpropiedad.facturador.domain;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "departamentos")
public class Department {

    @Id
    @Column(name = "codigo_departamento")
    private String departmentCode;

    @Column(name = "nombre_departamento")
    private String departmentName;

    public String getDepartmentCode() {
        return departmentCode;
    }

    public void setDepartmentCode(String departmentCode) {
        this.departmentCode = departmentCode;
    }

    public String getNombre_departamento() {
        return departmentName;
    }

    public void setNombre_departamento(String nombre_departamento) {
        this.departmentName = nombre_departamento;
    }


    public Department(String departmentCode, String departmentName) {
        this.departmentCode = departmentCode;
        this.departmentName = departmentName;
    }
}
