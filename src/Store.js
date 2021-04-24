import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thuck from 'redux-thunk';
import { cartReducer } from './Reducer/CartReducer';
import { categoryListReducer, productCategoryReducer, productCatDetailReducer, subCategoryListReducer } from './Reducer/CategorysReducer';
import { flashSaleListReducer } from './Reducer/FlashSaleReducer';
import { listRecommendProductReducer } from './Reducer/RecommendProductsReducer';
import { shopeeMallListReducer } from './Reducer/ShopeeMallReducer';
import { userSigninReducer } from './Reducer/UserReducer';


const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    },
};

const reducer = combineReducers(
    {
        cart: cartReducer,
        productDetail: productCatDetailReducer,
        subCategoryList: subCategoryListReducer,
        categoryList: categoryListReducer,
        flashSaleList: flashSaleListReducer,
        shopeeMallList: shopeeMallListReducer,
        userSignin: userSigninReducer,
        productsCategory: productCategoryReducer,
        recommendProductsList: listRecommendProductReducer,
    }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thuck)));

export default store;