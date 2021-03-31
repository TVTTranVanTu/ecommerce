import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoryContant";


export const categoryListReducer = (
    state = { loading: true, categorys: [] }, action
) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true }
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categorys: action.payload }
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}