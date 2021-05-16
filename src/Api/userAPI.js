import axiosClient from "./axiosClient";

const userApi = {
    checkOtp: (payload) => {
        const url = `/register?email-address=${payload}`;
        return axiosClient.get(url);
    },
    register: (payload) => {
        const url = '/home/users';
        return axiosClient.post(url, payload);
    },
    signIn: (payload) => {
        const url = '/login';
        return axiosClient.post(url, payload);
    },

    // getMe = async (payload) => {
    //     const url = '/me';
    //     const response = await axiosClient.get(url, payload);
    //     return response.data;
    // }
}

export default userApi;