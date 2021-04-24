import categoryApi from "../Api/categotyApi";
import productAPI from "../Api/productApi";
import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL,
    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    SUBCATEGORY_LIST_FAIL,
    SUBCATEGORY_LIST_REQUEST,
    SUBCATEGORY_LIST_SUCCESS,
} from "../Constants/CategoryContant"


export const listCategory = () => async (dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST
    });
    try {
        const data = await categoryApi.getAll();
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        });
    }
};
export const listSubCategory = (id) => async (dispatch) => {
    dispatch({
        type: SUBCATEGORY_LIST_REQUEST
    });
    try {
        const data = await categoryApi.get(id);
        dispatch({ type: SUBCATEGORY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SUBCATEGORY_LIST_FAIL, payload: error.message })
    }
};
export const listProductCategory = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_CATEGORY_LIST_REQUEST
    });
    try {
        const data = await productAPI.getAll(id);
        dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_LIST_FAIL,
            payload: error.message,
        });
    }
};

export const productCatDetail = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    try {
        const data = await productAPI.get(id);
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.message });
    }
};


