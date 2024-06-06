import { apiClient } from "api/instance";
import axios from "axios";
import { useState } from "react";

import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { RegisterUserData } from "screens/RegistrationScreen/RegistrationScreen.types";

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);

  const registerUser = async (data: RegisterUserData) => {
    try {
      const response = await apiClient.post(REGISTER_ENDPOINT, data);
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Message 1: ", error.message, "\n", error.response?.data);
        return;
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, registerUser };
};
