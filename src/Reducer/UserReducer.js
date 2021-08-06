import {
    CHECK_OTP_FAIL,
    CHECK_OTP_REQUEST,
    CHECK_OTP_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNINFB_FAIL,
    USER_SIGNINFB_REQUEST,
    USER_SIGNINFB_SUCCESS,
    USER_SIGNINGG_FAIL,
    USER_SIGNINGG_REQUEST,
    USER_SIGNINGG_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_RESET,
    USER_UPDATE_SUCCESS
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
};
export const userSigninGGReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNINGG_REQUEST:
            return { loading: true }
        case USER_SIGNINGG_SUCCESS:
            return { loading: false, data: action.payload }
        case USER_SIGNINGG_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return {}
        default:
            return state;
    }
};
export const userSigninFBReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNINFB_REQUEST:
            return { loading: true }
        case USER_SIGNINFB_SUCCESS:
            return { loading: false, datafb: action.payload }
        case USER_SIGNINFB_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return {}
        default:
            return state;
    }
};
export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case USER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const userListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};