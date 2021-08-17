import {
    COMMENT_CREATE_FAIL,
    COMMENT_CREATE_REQUEST,
    COMMENT_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_RESET,
    ORDER_CREATE_SUCCESS
} from "../Constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const postComment =(state={},action)=>{
    switch(action.type){
        case COMMENT_CREATE_REQUEST:
            return {loading:true}
        case COMMENT_CREATE_SUCCESS:
            return {loading:false,comment:action.payload}
        case COMMENT_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
};