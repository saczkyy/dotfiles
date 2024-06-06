import axios from "axios";
import { BASE_URL } from "@env";

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/`,
  timeout: 5000,
});
