import { View } from "react-native";
import { TextInput, Text, Card } from "react-native-paper";
import { InputActiveOutlineColor, styles } from "./BaseFormCard.styles";
import { BaseFormCardProps } from "./BaseFormCard.types";
import { FieldValues, useController } from "react-hook-form";

export const BaseFormCard = <TFieldValues extends FieldValues>({
  label,
  formProps,
  secureTextEntry = false,
  autoCapitalize = "sentences",
}: BaseFormCardProps<TFieldValues>) => {
  const { field, fieldState } = useController(formProps);

  return (
    <Card style={styles.baseCard} mode="elevated">
      <Card.Content>
        <View></View>
      </Card.Content>
    </Card>
  );
};
