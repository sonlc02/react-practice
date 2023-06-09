import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in'
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance;