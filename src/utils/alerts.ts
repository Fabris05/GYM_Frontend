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
        timer: 1500
    })
}