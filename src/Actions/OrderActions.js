import orderAPI from "../Api/orderApi";
import { CART_EMPTY } from "../Constants/CartContants";
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS
} from "../Constants/orderConstants";

export const createOrder = (order) => async (dispatch) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const data = await orderAPI.postOrder(order);
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
