import axios from "axios";
const axiosClient = axios.create({
  // baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  baseURL: `http://192.168.105.159:8000/api`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  },
});
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
  return config;
});
export default axiosClient;
