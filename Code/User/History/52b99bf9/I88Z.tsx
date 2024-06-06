import React from "react";
import { Linking, ScrollView, View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegistrationForm } from "./RegistrationScreen.types";
import { styles } from "./RegistrationScreen.styles";
import { FormTextInput } from "components/FormTextInput";
import { registrationFormSchema } from "validations/forms/registrationFormSchema";
import { useUserRegistration } from "hooks/useUserRegistration";

export const RegistrationScreen = () => {
  const { isLoading, registerUser } = useUserRegistration();

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
      <Title style={styles.title}>Sign Up</Title>
      <View style={styles.inputsView}>
        <FormTextInput<RegistrationForm>
          formProps={{ name: "firstName", control }}
          label="Name"
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "lastName", control }}
          label="Surname"
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "email", control }}
          label="E-mail"
          autoCapitalize="none"
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "password", control }}
          label="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <FormTextInput<RegistrationForm>
          formProps={{ name: "rePassword", control }}
          label="Confirm password"
          autoCapitalize="none"
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
          Sign up
        </Button>
        <Text style={styles.orText}>OR</Text>
        <Button
          mode="outlined"
          labelStyle={styles.buttonLabelStyle}
          style={styles.defaultButton}
          onPress={() => console.log(errors)}
        >
          Log in
        </Button>
        <Text style={styles.termsOfUse}>
          By creating an account you agree with our
          <Text
            style={styles.linkBlueColor}
            onPress={() => Linking.openURL("https://google.com")}
          >
            {
              " " /* Prettier is removing the space between 'our' and 'Terms' so I found a workaround */
            }
            Terms of Use
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
