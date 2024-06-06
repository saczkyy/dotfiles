import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./FormTextInput.styles";
import { FormInputProps } from "./FormTextInput.types";
import { Controller } from "react-hook-form";

export const FormInput = ({
  label,
  errorMessage,
  secureTextEntry,
  control,
  name,
}: FormInputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
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
            <Text style={styles.validationMsg}>
              {errorMessage?.message || ""}
            </Text>
          </>
        )}
      />
    </View>
  );
};
