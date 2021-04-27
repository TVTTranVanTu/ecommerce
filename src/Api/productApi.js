import axiosClient from "./axiosClient";
import queryString from "query-string";
export const productAPI = {

    getAll: (id, params) => {
        const queryParams = queryString.stringify(params);
        const url = `/home/categories/${id}/pageable-products?${queryParams}`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/home/categories/product-details/${id}`;
        return axiosClient.get(url);
    }

}

export default productAPI;