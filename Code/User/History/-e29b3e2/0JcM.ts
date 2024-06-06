import { apiClient } from "api/instance";
import axios from "axios";
import { useState } from "react";

import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { LoginUserData } from "screens/LoginScreen/LoginScreen.types";

export const useUserLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (data: LoginUserData) => {
    setIsLoading(true);
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
