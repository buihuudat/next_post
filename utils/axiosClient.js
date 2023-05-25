const { default: axios } = require("axios");

const baseURL = "http://localhost:3000";

const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.message;
  }
);

export default axiosClient;
