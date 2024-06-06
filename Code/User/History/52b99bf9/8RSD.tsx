import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTranslation } from "react-i18next";

import { RegistrationForm } from "./RegistrationScreen.types";
import { styles } from "./RegistrationScreen.styles";
import { FormTextInput } from "components/FormTextInput";
import { registrationFormSchema } from "validations/forms/registrationFormSchema";
import { useUserRegistration } from "hooks/useUserRegistration";

export const RegistrationScreen = () => {
  const { isLoading, registerUser } = useUserRegistration();
  const { t } = useTranslation(["registration"]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: "onChange",
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    await registerUser({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      repassword: data.rePassword,
    });
  };

  return (
    <ScrollView style={styles.mainView}>
      <Title style={styles.title}>{t("title")}</Title>
      <View style={styles.inputsView}>
        <FormTextInput<RegistrationForm>
<<<<<<< HEAD
          formProps={{ name: "firstName", control }}
          label={t("name")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "lastName", control }}
=======
          formProps={{ name: "name", control }}
          label={t("name")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "surname", control }}
>>>>>>> 7906b11996037b79fa49c49a281132657a11ca68
          label={t("surname")}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "email", control }}
          label={t("email")}
<<<<<<< HEAD
          autoCapitalize="none"
=======
>>>>>>> 7906b11996037b79fa49c49a281132657a11ca68
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "password", control }}
          label={t("password")}
<<<<<<< HEAD
          autoCapitalize="none"
=======
>>>>>>> 7906b11996037b79fa49c49a281132657a11ca68
          secureTextEntry={true}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "rePassword", control }}
<<<<<<< HEAD
          autoCapitalize="none"
=======
>>>>>>> 7906b11996037b79fa49c49a281132657a11ca68
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
          disabled={isLoading}
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
