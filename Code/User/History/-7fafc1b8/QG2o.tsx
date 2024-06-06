import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./RegistrationTextInput.styles";

export const RegistrationTextInput = ({
  label,
  value,
  onChangeText,
  errorMessage,
  secureTextEntry,
}: RegistrationTextInputProps) => {
  return (
    <View>
      <TextInput
        label={label}
        outlineColor="#79747E"
        activeOutlineColor="#79747E"
        mode="outlined"
        value={value}
        textColor={value.length == 0 ? "#595461" : "#1D1B20"}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        theme={{ colors: { primary: "#79747E" } }}
        error={errorMessage.length != 0}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.validationMsg}>{errorMessage}</Text>
    </View>
  );
};
