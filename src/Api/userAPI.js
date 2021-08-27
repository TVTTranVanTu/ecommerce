import axiosClient from "./axiosClient";

const userApi = {
  checkOtp: (payload) => {
    const url = `/register?email-address=${payload}`;
    return axiosClient.get(url);
  },
  register: (payload) => {
    const url = "/home/users";
    return axiosClient.post(url, payload);
  },
  signIn: (payload) => {
    const url = "/login";
    return axiosClient.post(url, payload);
  },
  signInFacebook: (payload) => {
    const url = "/login/facebook";
    return axiosClient.post(url, payload);
  },
  signInGoogle: (payload) => {
    const url = "/login/google";
    return axiosClient.post(url, payload);
  },
  updateUser: (id, payload) => {
    const url = `/home/users/${id}/username`;
    return axiosClient.put(url, payload);
  },
  listUser: () => {
    const url = "/home/users";
    return axiosClient.get(url);
  },
  userDetail: (id) => {
    const url = `/home/user-details/${id}`;
    return axiosClient.get(url);
  },
  updateUserDetail: (params) => {
    const url = `/home/user-details`;
    return axiosClient.put(url, params);
  },
};

export default userApi;
