import { FieldError } from "react-hook-form";

export interface Inputs {
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  RePassword: string;
}

export type FormInputProps = {
  label: any;
  errorMessage?: FieldError;
  secureTextEntry?: boolean;
  control: any;
};
