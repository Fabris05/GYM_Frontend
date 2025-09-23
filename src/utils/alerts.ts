import Swal from "sweetalert2";

export const successAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
    });
}

export const errorAlert = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500
    });
}
