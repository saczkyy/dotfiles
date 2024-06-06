import { RegistrationForm } from "screens/RegistrationScreen/RegistrationScreen.types";
import { UseControllerProps, FieldValues } from "react-hook-form";

export type FormInputProps<TFieldValues extends FieldValues> = {
  label: string;
  fromProps: UseControllerProps<TFieldValues>;

  secureTextEntry?: boolean;
};
