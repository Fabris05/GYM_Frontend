import Swal from "sweetalert2";

export const successAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000
    });
}

export const errorAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000
    });
}

export const findAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000
    });
}

export const notFindAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000
    });
}

export const confirmLogin = () => {
    Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'Haz iniciado sesión correctamente, serás redirigido. ¡Bienvenido!',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000
    })
}

export const deleteItem = (deletedProveedor: Function, proveedorId: number, elemento: String) => {
    Swal.fire({
        title: `¿Seguro que deseas eliminar este ${elemento}?`,
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#82ae37ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",

    }).then((result) => {
        if (result.isConfirmed) {
            deletedProveedor(proveedorId);
            Swal.fire("Eliminado", `El ${elemento} ha sido eliminado con éxito.`, "success");
        }
    });
}