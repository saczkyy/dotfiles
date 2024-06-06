import { View } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { styles } from "./BaseFormCard.styles";
import { BaseFormCardProps } from "./BaseFormCard.types";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export const BaseFormCard = ({ title, subtitle }: BaseFormCardProps) => {
  const [wasFilledOut, setWasFilledOut] = useState(false);

  return (
    <Card style={styles.baseCard} mode="elevated">
      <Card.Content>
        <View style={styles.wrapper}>
          <View style={styles.cardText}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{title}</Text>
              {wasFilledOut ? (
                <IconMI size={16} name="check-circle" color={"#8BC34A"} />
              ) : null}
            </View>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          {wasFilledOut ? (
            <Button
              labelStyle={styles.buttonLabelStyle}
              style={styles.button}
              mode="outlined"
            >
              Edit
            </Button>
          ) : (
            <Button
              labelStyle={styles.buttonLabelStyle}
              style={styles.button}
              mode="contained"
            >
              {wasFilledOut ? "Fill out" : "Edit"}
            </Button>
          )}
        </View>
      </Card.Content>
    </Card>
  );
};
