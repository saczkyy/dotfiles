import { apiClient } from "api/instance";
import axios, { AxiosError } from "axios";
import { useState } from "react";

import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { RegisterUserData } from "screens/RegistrationScreen/RegistrationScreen.types";

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const [error, setError] = useState<AxiosError>();
  const registerUser = async (data: RegisterUserData) => {
    try {
      setResponse(await apiClient.post(REGISTER_ENDPOINT, data));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("Message 1: ", e.message, "\n", e.response?.data);
        setError(e);
      }
    } finally {
      setIsLoading(false);
    }
    return [response, error] as const;
  };

  return { isLoading, registerUser };
};
