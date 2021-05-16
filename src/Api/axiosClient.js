import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // const customHeaders = {};

    // const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
    // if (accessToken) {
    //     customHeaders.Authorization = accessToken;
    // }

    // return {
    //     ...config,
    //     headers: {
    //         ...customHeaders,
    //         ...config.headers,
    //     }
    // };
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;