import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { styles } from "./FormTextInput.styles";
import { FormInputProps } from "./FormTextInput.types";
import { useController } from "react-hook-form";

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
        {...field}
        label={label}
        secureTextEntry={secureTextEntry}
        value={field.value}
        onChangeText={field.onChange}
        //
        error={fieldState.invalid}
        mode="outlined"
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        activeOutlineColor="#79747E"
      />
      <Text style={styles.validationMsg}>
        {fieldState.error?.message || ""}
      </Text>
    </View>
  );
};
