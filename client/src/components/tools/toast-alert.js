import {toast} from "react-toastify";

const options = {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
}

export const defaultToast = (message) => {
    return toast(message, options);
}

export const successToast = (message) => {
    return toast.success(message, options);
}

export const errorToast = (message) => {
    return toast.error(message, options);
}