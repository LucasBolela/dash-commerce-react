import axios from "axios";

const api = axios.create({
    // default configurations
    baseURL: "https://api.escuelajs.co/api/v1/",
    withCredentials: false,
});

api.interceptors.response.use(
    (response) => {
        const { data, status } = response;
        return { data, status };
    },
    (error) => Promise.reject(error)
);

export default api;