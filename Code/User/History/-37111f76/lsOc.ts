import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.20.48:8000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
