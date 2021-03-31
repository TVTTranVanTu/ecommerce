import { FLASHSALE_LIST_FAIL, FLASHSALE_LIST_REQUEST, FLASHSALE_LIST_SUCCESS } from "../Constants/FlashSaleConstant"
import Data from '../Data';

export const listFlashSale = () => async (dispatch) => {
    dispatch({ type: FLASHSALE_LIST_REQUEST });
    try {
        const data = Data.flashSale;
        dispatch({ type: FLASHSALE_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: FLASHSALE_LIST_FAIL, payload: error })
    }
}