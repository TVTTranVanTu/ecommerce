import { FLASHSALE_LIST_FAIL, FLASHSALE_LIST_REQUEST, FLASHSALE_LIST_SUCCESS } from "../Constants/FlashSaleConstant";


export const flashSaleListReducer = (
    state = { loading: true, flashSales: [] }, action
) => {
    switch (action.type) {
        case FLASHSALE_LIST_REQUEST:
            return { loading: true }
        case FLASHSALE_LIST_SUCCESS:
            return { loading: false, flashSales: action.payload }
        case FLASHSALE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}