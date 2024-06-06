import * as yup from "yup";

export const registrationFormSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Surname is required"),
  email: yup.string().required("E-mail is required").email("Must be an e-mail"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Password is required"),
});