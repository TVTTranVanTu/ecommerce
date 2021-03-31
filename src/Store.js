import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thuck from 'redux-thunk';
import { categoryListReducer } from './Reducer/CategorysReducer';
import { flashSaleListReducer } from './Reducer/FlashSaleReducer';
import { shopeeMallListReducer } from './Reducer/ShopeeMallReducer';


const initialState = {
};

const reducer = combineReducers(
    {
        categoryList: categoryListReducer,
        flashSaleList: flashSaleListReducer,
        shopeeMallList: shopeeMallListReducer,
    }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thuck)));

export default store;