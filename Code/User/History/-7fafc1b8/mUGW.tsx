import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./FormInput.styles";
import { FormInputProps } from "./FormInput.types";

export const FormInput = ({
  label,
  value,
  onChangeText,
  errorMessage,
  secureTextEntry,
}: FormInputProps) => {
  return (
    <View>
      <TextInput
        label={label}
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        theme={{ colors: { primary: "#79747E" } }}
        error={errorMessage.length !== 0}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.validationMsg}>{errorMessage}</Text>
    </View>
  );
};
