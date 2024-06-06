import { Control, FieldError, FieldValue } from "react-hook-form";
import { RegistrationForm } from "screens/RegistrationScreen/RegistrationScreen.types";
import { UseControllerProps } from "react-hook-form";

export type FormInputProps<TFieldValues extends FieldValues> = {
  label: string;
  fromProps: UseControllerProps<T>;

  secureTextEntry?: boolean;
};
