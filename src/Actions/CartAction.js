import productAPI from "../Api/productApi";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../Constants/CartContants";

export const addToCart =
  (productId, qty, size) => async (dispatch, getState) => {
    const data = await productAPI.get(productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        productName: data.productName,
        productThumbnail: data.productThumbnail,
        productPrice: data.productPrice,
        quantity: data.quantity,
        product: data.id,
        postTitle: data.postTitle,
        qty,
        size,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
