import { apiClient } from "api/instance";
import axios from "axios";
import { REGISTER_ENDPOINT } from "api/constants/endpoints";
import { useState } from "react";

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const registerUser = async (data: Record<string, any>) => {
    try {
      response = await apiClient.post(REGISTER_ENDPOINT, data);
      setIsLoading(false);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setIsLoading(false);
        error = e;
        console.error("Message 1: ", e.message, "\n", e.response?.data);
      }
    }
    return [response, error] as const;
  };

  return { isLoading, registerUser };
};
