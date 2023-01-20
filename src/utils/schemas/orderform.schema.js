import * as yup from "yup";



export const orderSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Required"),
    name: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    age: yup.number().integer().positive().required("Required"),
    deliverAdress: yup.string().required("Required"),
    phone: yup.string().required("Required")
})