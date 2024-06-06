import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./FormTextInput.styles";
import { FormInputProps } from "./FormTextInput.types";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { RegistrationForm } from "screens/RegistrationScreen/RegistrationScreen.types";

export const FormInput = ({
  label,
  formProps,
  secureTextEntry,
}: FormInputProps<RegistrationForm>) => {
  const { field, fieldState } = useController(formProps);

  return (
    <View>
      <TextInput
        label={label}
        mode="outlined"
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        activeOutlineColor="#79747E"
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.validationMsg}>{errorMessage?.message || ""}</Text>
    </View>
  );
};