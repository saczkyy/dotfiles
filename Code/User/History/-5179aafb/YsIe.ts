type RegistrationTextInputProps = {
    label: string,
    value: string,
    errorMessage: string,
    onChangeText: (text: string) => any,
    secureTextEntry?: boolean,
}