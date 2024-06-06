import { UseControllerProps, FieldValues } from "react-hook-form";

export type AutocapitalizeTypes =
  | "off"
  | "on"
  | "none"
  | "sentences"
  | "words"
  | "characters";

export type FormTextInputProps<TFieldValues extends FieldValues> = {
  label: string;
  formProps: UseControllerProps<TFieldValues>;

  secureTextEntry?: boolean;
  autoCapitalize?: AutocapitalizeTypes;
};
