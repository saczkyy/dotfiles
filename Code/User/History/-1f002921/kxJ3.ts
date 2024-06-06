import { FieldError } from "react-hook-form";

export type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
};

export type FormInputProps = {
  label: string;
  errorMessage?: FieldError;
  secureTextEntry?: boolean;
  control: any;
  name: string;
};
