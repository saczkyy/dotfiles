import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://192.168.20.48:8000/api/",
  timeout: 1000,
});
