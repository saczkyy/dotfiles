import { apiClient } from "api/instance";
import axios from "axios";
import { useState } from "react";

import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { RegisterUserData } from "screens/RegistrationScreen/RegistrationScreen.types";

export const useUserRegistration = () => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const registerUser = async (data: RegisterUserData) => {
    try {
      setResponse(await apiClient.post(REGISTER_ENDPOINT, data));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("Message 1: ", e.message, "\n", e.response?.data);
        return;
      }
      console.error(e);
    }
    setIsLoading(false);
    console.log(response);
  };

  return { isLoading, registerUser };
};
