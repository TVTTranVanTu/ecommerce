import axiosClient from "./axiosClient";
export const orderAPI = {

    postOrder: (payload) => {
        const url = '/home/orders';
        return axiosClient.post(url, payload);
    },

}

export default orderAPI;