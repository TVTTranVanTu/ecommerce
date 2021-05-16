import {
    CHECK_OTP_FAIL,
    CHECK_OTP_REQUEST,
    CHECK_OTP_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from "../Constants/UserConstants";

export const checkOtpCode = (state = { loading: true, code: '' }, action) => {
    switch (action.type) {
        case CHECK_OTP_REQUEST:
            return { loading: true };
        case CHECK_OTP_SUCCESS:
            return { loading: false, code: action.payload };
        case CHECK_OTP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true }
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return {}
        default:
            return state;
    }
}
