import userApi from "../Api/userAPI";
import {
  CHECK_OTP_FAIL,
  CHECK_OTP_REQUEST,
  CHECK_OTP_SUCCESS,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
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
  USER_UPDATE_SUCCESS,
} from "../Constants/UserConstants";

export const checkOtp = (emailAddress) => async (dispatch) => {
  dispatch({ type: CHECK_OTP_REQUEST, payload: emailAddress });
  try {
    const code = await userApi.checkOtp(emailAddress);
    console.log(code);
    dispatch({ type: CHECK_OTP_SUCCESS, payload: code });
  } catch (error) {
    dispatch({
      type: CHECK_OTP_FAIL,
      payload: error.message,
    });
  }
};

export const register =
  (username, emailAddress, password) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { username, emailAddress, password },
    });
    try {
      const data = await userApi.register({ username, emailAddress, password });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

export const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const data = await userApi.signIn({ username, password });
    const { jwttoken } = data;
    console.log(jwttoken);
    localStorage.setItem("access_token", jwttoken);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      paload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const siginToGoogle = (googleresponse) => async (dispatch) => {
  dispatch({ type: USER_SIGNINGG_REQUEST, payload: { googleresponse } });
  try {
    const data = await userApi.signInGoogle(googleresponse);
    dispatch({ type: USER_SIGNINGG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGNINGG_FAIL,
      paload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const siginToFacebook = (facebookresponse) => async (dispatch) => {
  dispatch({ type: USER_SIGNINFB_REQUEST, payload: { facebookresponse } });
  try {
    const data = await userApi.signInFacebook(facebookresponse);
    dispatch({ type: USER_SIGNINFB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGNINFB_FAIL,
      paload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (id, username) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_REQUEST, payload: username });
  try {
    const { data } = await userApi.updateUser(id, { username });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_FAIL, payload: message });
  }
};

export const listUsers = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const { data } = await userApi.listUser();
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const userDetailAction = (id) => async (dispatch) => {
  dispatch({ type: USER_DETAIL_REQUEST });
  try {
    const { data } = await userApi.userDetail(id);
    dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAIL_FAIL, error: message });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/signin";
};
