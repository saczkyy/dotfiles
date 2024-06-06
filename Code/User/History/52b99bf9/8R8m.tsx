import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "translation/i18n";
// import { i18n } from "translation/i18n";
import { useTranslation } from "react-i18next";

import { styles } from "./RegistrationScreen.styles";
import { FormTextInput } from "components/FormTextInput";
import { RegistrationForm } from "./RegistrationScreen.types";
import { registrationFormSchema } from "validations/forms/registrationFormSchema";

export const RegistrationScreen = () => {
  const { t } = useTranslation(["registration"]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: "onChange",
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.mainView}>
      <Title style={styles.title}>{t("registrationTitle")}</Title>
      <View style={styles.inputsView}>
        <FormTextInput<RegistrationForm>
          formProps={{ name: "name", control }}
          label={t("name")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "surname", control }}
          label={t("surname")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "email", control }}
          label={t("email")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "password", control }}
          label={t("password")}
          secureTextEntry={true}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "rePassword", control }}
          label={t("rePassword")}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonsView}>
        <Button
          mode="contained"
          labelStyle={styles.buttonLabelStyle}
          style={styles.defaultButton}
          onPress={handleSubmit(onSubmit)}
        >
          {t("signUp")}
        </Button>
        <Text style={styles.orText}>{t("or")}</Text>
        <Button
          mode="outlined"
          labelStyle={styles.buttonLabelStyle}
          style={styles.defaultButton}
          onPress={() => console.log("log in")}
        >
          {t("logIn")}
        </Button>
        <Text style={styles.termsOfUse}>
          {t("termsOfUse1")}
          <Text
            style={styles.linkBlueColor}
            onPress={() => Linking.openURL("https://google.com")}
          >
            {t("termsOfUse2")}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
