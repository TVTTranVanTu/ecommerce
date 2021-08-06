import productAPI from "../Api/productApi";
import {
    RECOMMENDPRODUCTS_LIST_FAIL,
    RECOMMENDPRODUCTS_LIST_REQUEST,
    RECOMMENDPRODUCTS_LIST_SUCCESS
} from "../Constants/RecommendProductsContant"

export const listRecommendProducts = (id, params) => async (dispatch) => {
    dispatch({ type: RECOMMENDPRODUCTS_LIST_REQUEST });
    try {
        const data = await productAPI.getRecommender(id, params);
        dispatch({ type: RECOMMENDPRODUCTS_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: RECOMMENDPRODUCTS_LIST_FAIL, payload: error })
    }
}
