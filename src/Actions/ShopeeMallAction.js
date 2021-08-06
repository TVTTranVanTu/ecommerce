import {
    SHOPEEMALL_LIST_FAIL,
    SHOPEEMALL_LIST_REQUEST,
    SHOPEEMALL_LIST_SUCCESS
} from "../Constants/ShopeeMallConstant"
import Data from "../Data"

export const listShopeeMallProducts = () => async (dispatch) => {
    dispatch({ type: SHOPEEMALL_LIST_REQUEST })
    try {
        const data = Data.ShopeeMall;
        dispatch({ type: SHOPEEMALL_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: SHOPEEMALL_LIST_FAIL, payload: error })
    }
}