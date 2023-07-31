import axios from "axios";

const ClientBase = axios.create({
  baseURL: "http://auth:4000",
});

ClientBase.interceptors.request.use((config) => {
  config.headers = {
    "Content-Type": "application/json",
  };

  return config;
});

export default ClientBase;
