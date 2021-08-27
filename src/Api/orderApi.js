import axiosClient from "./axiosClient";
export const orderAPI = {
  postOrder: (payload) => {
    const url = "/home/orders";
    return axiosClient.post(url, payload);
  },
  getAll: (id) => {
    const url = `/home/orders/users/${id}`;
    return axiosClient.get(url);
  },
};

export default orderAPI;
