import { RECOMMENDPRODUCTS_LIST_FAIL, RECOMMENDPRODUCTS_LIST_REQUEST, RECOMMENDPRODUCTS_LIST_SUCCESS } from "../Constants/RecommendProductsContant";

export const listRecommendProductReducer = (state = { loading: true, recommendProducts: [] }, action) => {
    switch (action.type) {
        case RECOMMENDPRODUCTS_LIST_REQUEST:
            return { ...state, loading: true }
        case RECOMMENDPRODUCTS_LIST_SUCCESS:
            return { ...state, loading: false, recommendProducts: action.payload }
        case RECOMMENDPRODUCTS_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}