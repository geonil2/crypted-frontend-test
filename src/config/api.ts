import axios, { AxiosError } from "axios";

import { showAlert } from "src/components/globalAlert";

export const API = axios.create();

export const isAxiosError = (error: any): error is AxiosError => {
  return error?.isAxiosError;
};

const globalErrorHandler = async (error?: any) => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status && status >= 500) {
      showAlert("Sorry error occurred (500)");
    } else {
      showAlert(error.message);
    }
  }
  throw error;
};

API.defaults.baseURL = `http://localhost:3000`;
API.interceptors.response.use(undefined, globalErrorHandler);
