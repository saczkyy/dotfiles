import { UseControllerProps, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native-paper";

export type FormTextInputProps<TFieldValues extends FieldValues> = {
  label: string;
  formProps: UseControllerProps<TFieldValues>;

  secureTextEntry?: boolean;
  autoCapitalize?: TextInputProps["autoCapitalize"];
};
