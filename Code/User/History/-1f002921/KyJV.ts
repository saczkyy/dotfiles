import { Control } from "react-hook-form";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
};

export type FormInputProps = {
  label: any;
  errorMessage: any;
  secureTextEntry?: boolean;
  control: Control?;
};
