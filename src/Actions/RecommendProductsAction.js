import { RECOMMENDPRODUCTS_LIST_FAIL, RECOMMENDPRODUCTS_LIST_REQUEST, RECOMMENDPRODUCTS_LIST_SUCCESS } from "../Constants/RecommendProductsContant"
import Data from "../Data";

export const listRecommendProducts = () => async (dispatch) => {
    dispatch({ type: RECOMMENDPRODUCTS_LIST_REQUEST });
    try {
        const data = Data.listProducts;
        dispatch({ type: RECOMMENDPRODUCTS_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: RECOMMENDPRODUCTS_LIST_FAIL, payload: error })
    }
}