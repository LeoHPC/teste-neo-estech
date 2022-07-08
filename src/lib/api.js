// AXIOS
import axios from "axios";

const api = axios.create({
  baseURL: 'https://homolog.api.neoestech.com.br',
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@Estech:TOKEN'))}`,
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem('@Estech:TOKEN'));
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;