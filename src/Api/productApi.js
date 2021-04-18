import axiosClient from "./axiosClient";

export const listProductCategoryApi = {
    getAll: (id) => {
        const url = `/home/categories/${id}/products`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    }

}

export default listProductCategoryApi;