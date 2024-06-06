import { UseControllerProps, FieldValues } from "react-hook-form";

export type FormTextInputProps<TFieldValues extends FieldValues> = {
  label: string;
  formProps: UseControllerProps<TFieldValues>;

  secureTextEntry?: boolean;
  autoCapitalize?: string;
};
