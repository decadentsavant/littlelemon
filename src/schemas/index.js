import * as yup from "yup";

const today = new Date();

export const basicSchema = yup.object().shape({
    date: yup.date().required(),
    email: yup.string().email("Please enter a valid email").required(),
    guests: yup.number().positive().integer().required("Number required"),
})