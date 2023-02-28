import * as yup from "yup";

export const basicSchema = yup.object().shape({
    date: yup.date().required(),
    email: yup.string().email("Please enter a valid email").required(),
    guests: yup.number()
        .required("Required")
        .positive()
        .integer()
        .min(1, "At least 1 guest")
        .max(10, "Max 10 guests"),
});