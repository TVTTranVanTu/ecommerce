import axiosClient from "./axiosClient";
import queryString from "query-string";
export const productAPI = {
  getSubAll: (name, id, params) => {
    const queryParams = queryString.stringify(params);
    const url = `/home/categories${name}/${id}/pageable-products?${queryParams}`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/home/categories/product-details/${id}`;
    return axiosClient.get(url);
  },
  getRecommender: (id, params) => {
    const queryParams = queryString.stringify(params);
    const url = `/home/users/${id}/recommender?${queryParams}`;
    return axiosClient.get(url);
  },
  postComment: (payload, token) => {
    const url = `/home/posts/comments`;
    return axiosClient.post(url, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default productAPI;
