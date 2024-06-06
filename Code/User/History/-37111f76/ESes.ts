import axios from "axios";
import { BASE_URL } from "@env";
import { Cookies } from "@react-native-cookies/cookies";

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/`,
  timeout: 5000,
});

const setTokenCookies = async (accessToken, refreshToken) => {
  await Cookies.set("access_token", accessToken, {
    domain: "your-backend-domain",
    path: "/",
    secure: true,
    sameSite: "None",
  });
  await Cookies.set("refresh_token", refreshToken, {
    domain: "your-backend-domain",
    path: "/",
    secure: true,
    sameSite: "None",
  });
};
