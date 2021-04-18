import categoryApi from "../Api/categotyApi";
import listProductCategoryApi from "../Api/productApi";
import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL,
    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS
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

export const listProductCategory = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_CATEGORY_LIST_REQUEST
    });
    try {
        const data = await listProductCategoryApi.getAll(id);
        dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_LIST_FAIL,
            payload: error.message,
        });
    }
};


