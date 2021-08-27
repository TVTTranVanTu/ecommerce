import axiosClient from "./axiosClient";
import queryString from "query-string";

const searchApi = {
  getAll: (keyword, params) => {
    const queryParams = queryString.stringify(params);
    const url = `/home/categories/products/search?searchArg=${keyword}&${queryParams}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
