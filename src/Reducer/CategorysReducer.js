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
    SUBCATEGORY_LIST_SUCCESS
} from "../Constants/CategoryContant";


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
};

export const subCategoryListReducer = (
    state = { loading: true, subCategories: [] }, action
) => {
    switch (action.type) {
        case SUBCATEGORY_LIST_REQUEST:
            return { loading: true }
        case SUBCATEGORY_LIST_SUCCESS:
            return { loading: false, subCategories: action.payload }
        case SUBCATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const productCategoryReducer = (
    state = { loading: true, data: {} }, action
) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_CATEGORY_LIST_SUCCESS:
            return { loading: false, data: action.payload }
        case PRODUCT_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};



export const productCatDetailReducer = (
    state = { loading: true, productInfo: {} }, action
) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true }
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, productInfo: action.payload }
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};