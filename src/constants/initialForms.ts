export const initialUserForm = {
    nombre: "",
    dni: "",
    telefono: "",
    correo: "",
    direccion: "",
    cargo: "",
    sede: { sedeId: null },
};

export const initialClienteForm = {
    nombre: "",
    dni: "",
    telefono: "",
    correo: "",
    direccion: "",
    sede: { sedeId: 0, nombre: "" },
    fechaPago: "",
    mensualidad: 150.0,
    descripcion: "",
}

export const initialProveedorForm = {
    nombre: "",
    categoria: "",
};
export const initialSedeForm = {
    nombre: "",
    direccion: "",
};

export const initialMaquinaForm = {
    maquinaId: "",
    nombre: "",
    descripcion: "",
    imagen: "",
    estado: "Operativa",
    sede: {
        sedeId: "",
    },
    proveedor: {
        proveedorId: "",
    },
}

export const initialPagoForm = {
    fecha: "",
    monto: "",
    estado: "Pendiente"
}

export const initialUsuarioForm = {
    nombreUsuario: "",
    password: "",
    rol: "",
}