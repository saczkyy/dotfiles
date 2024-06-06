export type RegistrationTextInputProps = {
  label: string;
  value: string;
  errorMessage: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};
