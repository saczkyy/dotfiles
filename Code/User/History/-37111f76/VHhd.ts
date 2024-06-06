import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "192.168.1.50:8000/api/",
  timeout: 1000,
});
