import axios from "axios";
import { BASE_URL } from "@env";

console.log(BASE_URL);

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/`,
  timeout: 5000,
});
