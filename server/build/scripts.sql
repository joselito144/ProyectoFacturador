-- Creación de tablas:

create table usuarios
(
    usuario VARCHAR (100),
    contrasenia VARCHAR(100) not NULL,
    rol VARCHAR (100) not NULL,
    PRIMARY KEY (usuario)
);

CREATE table propietarios
(
    nro_identificación varchar(20),
    nombre varchar(255) not NULL,
    apellidos varchar(255) not NULL,
    ciudad_residencia varchar(20),
    direccion varchar(255),
    celular varchar(20),
    correo_electronico varchar(100),
    PRIMARY KEY(nro_identificación)
);

CREATE table departamentos
(
    codigo_departamento varchar(20),
    nombre_departamento varchar(100) not NULL,
    PRIMARY KEY (codigo_departamento)
);

CREATE table ciudades
(
    codigo_ciudad varchar(20),
    dep_ciudad varchar(20),
    nombre_ciudad varchar(100) not NULL,
    PRIMARY KEY (codigo_ciudad)
);

CREATE table unidades_residenciales
(
    nit_unidad varchar(20),
    razon_social_unidad varchar(255) not NULL,
    ciudad_unidad varchar(20) not NULL,
    direccion_unidad varchar(255) not NULL,
    telefono_unidad varchar(100) not NULL,
    PRIMARY KEY (nit_unidad)
);

CREATE table apartamentos
(
    nit_unidad varchar(20),
    nro_apartamento varchar(20),
    Bloque varchar(20),
    id_propietario varchar(20),
    coeficiente numeric(3),
    PRIMARY KEY (nit_unidad,nro_apartamento)
);

CREATE table facturas
(
    nro_factura varchar(20) not NULL UNIQUE,
    ciclo_factura varchar(20),
    apartamento varchar(20),
    nit_unidad varchar(20),
    fecha date not NULL,
    PRIMARY KEY (ciclo_factura, apartamento, nit_unidad)
);

CREATE table conceptos_facturados
(
    nro_factura varchar(20),
    concepto varchar(20),
    valor numeric (9,2) not NULL,
    PRIMARY KEY (nro_factura, concepto)
);

CREATE table conceptos
(
    id_concepto varchar(20),
    nat_contable varchar(20),
    CONSTRAINT chk_naturaleza CHECK (nat_contable IN ('Débito', 'Crédito')),
    PRIMARY KEY (id_concepto)
);

CREATE table pagos
(
    id_pago varchar(20),
    fecha_pago date,
    canal_pago varchar(20),
    PRIMARY KEY (id_pago)
);

CREATE table canales_pago
(
    id_canal_pago varchar(20),
    descripcion_canal_pago varchar(255),
    PRIMARY KEY (id_canal_pago)
);

CREATE table ciclos
(
    id_ciclo varchar(20),
    anio_ciclo varchar(20),
    mes_cicclo varchar(10),
    PRIMARY KEY (id_ciclo)
);

-- Claves Foráneas

alter table propietarios
ADD CONSTRAINT fk_propietarios_ciudad
FOREIGN key (ciudad_residencia)
REFERENCES  ciudades(codigo_ciudad);

alter table ciudades
add CONSTRAINT fk_ciudad_departa
FOREIGN key (dep_ciudad)
REFERENCES  departamentos(codigo_departamento);


alter table unidades_residenciales
add CONSTRAINT fk_ciudad_unidad
FOREIGN key (ciudad_unidad)
REFERENCES  ciudades(codigo_ciudad);

alter table apartamentos
add CONSTRAINT fk_unidad_apartamento
FOREIGN key (nit_unidad)
REFERENCES  unidades_residenciales(nit_unidad);

alter table facturas
add CONSTRAINT fk_ciclo_factura
FOREIGN key (ciclo_factura)
REFERENCES  ciclos(id_ciclo);

alter table facturas
add CONSTRAINT fk_apatamento_factura
FOREIGN key (apartamento, nit_unidad)
REFERENCES  apartamento(nro_apartamento, nit_unidad);

alter table conceptos_facturados
add CONSTRAINT fk_concepto_fact
FOREIGN key (concepto)
REFERENCES  conceptos(id_concepto);




