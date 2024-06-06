import { Control, FieldError } from "react-hook-form";
import { RegistrationForm } from "screens/RegistrationScreen/RegistrationScreen.types";

export type FormInputProps = {
  label: string;
  errorMessage?: FieldError;
  secureTextEntry?: boolean;
  control: Control<RegistrationForm, any>;
  name: any; //I really don't know what I'm supposed to set here other than any
};
