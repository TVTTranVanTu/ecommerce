import {
  SEARCH_PRODUCT_LIST_FAIL,
  SEARCH_PRODUCT_LIST_REQUEST,
  SEARCH_PRODUCT_LIST_SUCCESS,
} from "../Constants/SearchProductContants";

export const productSearchReducer = (
  state = { loading: true, data: {} },
  action
) => {
  switch (action.type) {
    case SEARCH_PRODUCT_LIST_REQUEST:
      return { loading: true };
    case SEARCH_PRODUCT_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case SEARCH_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
