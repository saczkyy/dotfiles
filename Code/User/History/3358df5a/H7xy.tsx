import { View } from "react-native";
import { TextInput, Text, Card } from "react-native-paper";
import { styles } from "./BaseFormCard.styles";
import { BaseFormCardProps } from "./BaseFormCard.types";
import { FieldValues, useController } from "react-hook-form";

export const BaseFormCard = ({ title, subtitle }: BaseFormCardProps) => {
  return (
    <Card style={styles.baseCard} mode="elevated">
      <Card.Content>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};
