import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thuck from "redux-thunk";
import { cartReducer } from "./Reducer/CartReducer";
import { flashSaleListReducer } from "./Reducer/FlashSaleReducer";
import { listRecommendProductReducer } from "./Reducer/RecommendProductsReducer";
import { shopeeMallListReducer } from "./Reducer/ShopeeMallReducer";

import {
  categoryListReducer,
  productCategoryReducer,
  productCatDetailReducer,
  subCategoryListReducer,
  postCommentReducer,
} from "./Reducer/CategorysReducer";
import {
  checkOtpCode,
  updateUserDetailReducer,
  userDetailReducer,
  userListReducer,
  userRegisterReducer,
  userSigninFBReducer,
  userSigninGGReducer,
  userSigninReducer,
  userUpdateReducer,
} from "./Reducer/UserReducer";
import { orderCreateReducer, orderListReducer } from "./Reducer/OrderReducers";
import { productSearchReducer } from "./Reducer/SearchProductReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
};

const reducer = combineReducers({
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  codeotp: checkOtpCode,
  userDetail: userDetailReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  orderList: orderListReducer,
  listProductsSearch: productSearchReducer,
  updateUserDetail: updateUserDetailReducer,
  postComment: postCommentReducer,
  orderCreate: orderCreateReducer,
  productDetail: productCatDetailReducer,
  subCategoryList: subCategoryListReducer,
  categoryList: categoryListReducer,
  flashSaleList: flashSaleListReducer,
  shopeeMallList: shopeeMallListReducer,
  userSignin: userSigninReducer,
  userSigninGG: userSigninGGReducer,
  userSigninFB: userSigninFBReducer,
  productsCategory: productCategoryReducer,
  recommendProductsList: listRecommendProductReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thuck))
);

export default store;
