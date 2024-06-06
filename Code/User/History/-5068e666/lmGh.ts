import { apiClient } from "api/instance";
import axios from "axios";
import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { useState } from "react";

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const registerUser = async (data: Record<string, any>) => {
    let response, error;
    try {
      response = await apiClient.post(REGISTER_ENDPOINT, data);
      setIsLoading(false);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setIsLoading(false);
        error = e;
        console.error(error.response?.data);
        console.error(error.response?.status);
        console.error(error.response?.headers);
        console.error(error.request);
        console.error("Error", error.message);
      }
    }
    return [response, error] as const;
  };

  return [isLoading, registerUser] as const;
};
