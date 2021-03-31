import { SHOPEEMALL_LIST_FAIL, SHOPEEMALL_LIST_REQUEST, SHOPEEMALL_LIST_SUCCESS } from "../Constants/ShopeeMallConstant";

export const shopeeMallListReducer = (
    state = { loading: true, shopeeMalls: [] }, action
) => {
    switch (action.type) {
        case SHOPEEMALL_LIST_REQUEST:
            return { loading: true }
        case SHOPEEMALL_LIST_SUCCESS:
            return { loading: false, shopeeMalls: action.payload }
        case SHOPEEMALL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}