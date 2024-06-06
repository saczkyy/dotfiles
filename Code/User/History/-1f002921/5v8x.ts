import { FieldErrors } from "react-hook-form";

type Inputs = {
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  RePassword: string;
};

export type FormInputProps = {
  label: any;
  errorMessage: FieldErrors<Inputs>;
  secureTextEntry?: boolean;
  control: any;
};
