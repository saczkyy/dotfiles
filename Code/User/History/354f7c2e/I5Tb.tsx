import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { InputActiveOutlineColor, styles } from "./FormTextInput.styles";
import { FormTextInputProps } from "./FormTextInput.types";
import { FieldValues, useController } from "react-hook-form";

export const FormTextInput = <TFieldValues extends FieldValues>({
  label,
  formProps,
  secureTextEntry,
}: FormTextInputProps<TFieldValues>) => {
  const { field, fieldState } = useController(formProps);

  return (
    <View>
      <TextInput
        label={label}
        secureTextEntry={secureTextEntry}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        error={fieldState.invalid}
        mode="outlined"
        style={styles.inputStyle}
        outlineStyle={styles.inputOutlineStyle}
        activeOutlineColor={InputActiveOutlineColor}
      />
      <Text style={styles.validationMsg}>
        {fieldState.error?.message ?? ""}
      </Text>
    </View>
  );
};
