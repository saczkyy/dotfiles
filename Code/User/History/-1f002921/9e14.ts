import { RegistrationForm } from "screens/RegistrationScreen/RegistrationScreen.types";
import { UseControllerProps, FieldValues } from "react-hook-form";

export type FormInputProps<TFieldValues extends FieldValues> = {
  label: string;
  formProps: UseControllerProps<TFieldValues>;

  secureTextEntry?: boolean;
};
