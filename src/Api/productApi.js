import axiosClient from "./axiosClient";

export const productAPI = {
    getAll: (id) => {
        const url = `/home/categories/${id}/products`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/home/categories/product-details/${id}`;
        return axiosClient.get(url);
    }

}

export default productAPI;