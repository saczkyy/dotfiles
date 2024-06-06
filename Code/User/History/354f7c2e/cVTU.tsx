import { View } from "react-native";
import { TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "./FormTextInput.styles";
import { FormInputProps } from "./FormTextInput.types";
import { Controller } from "react-hook-form";

type Inputs = {
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  RePassword: string;
};

export const FormInput = ({
  label,
  errorMessage,
  secureTextEntry,
  control,
}: FormInputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={label}
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
              error={errorMessage?.length !== 0}
              secureTextEntry={secureTextEntry}
            />
            <Text style={styles.validationMsg}>{errorMessage}</Text>
          </>
        )}
      />
    </View>
  );
};
