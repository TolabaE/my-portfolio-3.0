import Swal from "sweetalert2";

export const successAlert = (messages) =>{
    return Swal.fire({
        title: `${messages}`,
        text: "¡Gracias por su consulta!",
        icon: "success"
    });
}