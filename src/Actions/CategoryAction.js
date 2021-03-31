import Axios from "axios";
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoryContant"
import Data from '../Data';

export const listCategory = () => async (dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST
    });
    try {
        // const {data} = await Axios.get('/api/categorys');
        const data = Data.categorys;
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error
        })
    }
}