import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./FormTextInput.styles";
import { FormInputProps } from "./FormTextInput.types";
import { useController, UseControllerProps } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const FormInput = ({
  label,
  errorMessage,
  secureTextEntry,
}: FormInputProps) => {
  return (
    <View>
      <TextInput
        label={label}
        mode="outlined"
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        activeOutlineColor="#79747E"
        error={
          errorMessage !== undefined && errorMessage.message !== undefined
            ? errorMessage.message.length !== 0
            : false
        }
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.validationMsg}>{errorMessage?.message || ""}</Text>
    </View>
  );
};
