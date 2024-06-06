import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { LoginScreenProps } from "./LoginScreen.types";
import { useStyles } from "./LoginScreen.styles";
import { FormTextInput } from "components/FormTextInput";
import { LoginForm } from "./LoginScreen.types";
import { loginFormSchema } from "validations/forms/loginFormSchema";
import { Paths } from "navigation/paths";

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const styles = useStyles();
  const { t } = useTranslation(["login"]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.mainView}>
      <Title style={styles.title}>{t("title")}</Title>
      <View style={styles.inputsView}>
        <FormTextInput
          formProps={{ name: "email", control }}
          label={t("email")}
        />
        <FormTextInput
          formProps={{ name: "password", control }}
          label="Password"
          secureTextEntry={true}
        />
      </View>
      <Text style={styles.link}>
        <Text
          style={styles.linkBlueColor}
          onPress={() => Linking.openURL("https://google.com")}
        >
          Forgot password?
        </Text>
      </Text>

      <View style={styles.buttonsView}>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabelStyle}
          style={styles.defaultButton}
          onPress={handleSubmit(onSubmit)}
        >
          Log in
        </Button>
        <Text style={styles.orText}>OR</Text>
        <Button
          mode="outlined"
          labelStyle={styles.buttonLabelStyle}
          style={styles.defaultButton}
          onPress={() => navigation.navigate(Paths.Registration)}
        >
          Sign up
        </Button>
      </View>
    </ScrollView>
  );
};
