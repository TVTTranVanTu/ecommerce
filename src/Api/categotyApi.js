import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: () => {
    const url = '/home/categories';
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/home/categories/${id}/subcategories`;
    return axiosClient.get(url);
  }
}



export default categoryApi;

