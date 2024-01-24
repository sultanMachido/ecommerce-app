import axios from "axios";

type ApiResource = {
  url: string;
  config: { [key: string]: string | any };
  body?: { [key: string]: string | number };
};

const baseUrl = "https://dummyjson.com";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

const api = (apiService: any) => {
  return {
    post: (requestInfo: ApiResource) => {
      const { url, config, body } = requestInfo;
      return apiService.post(url, body, config);
    },
    get: (requestInfo: ApiResource) => {
      const { url, config } = requestInfo;
      return apiService.get(url, config);
    },
  };
};

export const apiClient = api(instance);
