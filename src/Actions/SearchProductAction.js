import searchApi from "../Api/searchApi";
import {
  SEARCH_PRODUCT_LIST_FAIL,
  SEARCH_PRODUCT_LIST_REQUEST,
  SEARCH_PRODUCT_LIST_SUCCESS,
} from "../Constants/SearchProductContants";

export const listProductSearch = (keyword, params) => async (dispatch) => {
  dispatch({
    type: SEARCH_PRODUCT_LIST_REQUEST,
  });
  try {
    const data = await searchApi.getAll(keyword, params);
    dispatch({ type: SEARCH_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCT_LIST_FAIL, payload: error.message });
  }
};
