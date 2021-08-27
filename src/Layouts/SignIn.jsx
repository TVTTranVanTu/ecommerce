import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { siginToFacebook, siginToGoogle, signin } from "../Actions/UserAction";
import MessageBox from "../Components/boxInfor/MessageBox";
import image1 from "../assets/background.png";
import { validPassword, validUserName } from "../regex";
function SingIn(props) {
  function signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: "Google",
    };

    dispatch(siginToGoogle(googleresponse));
  }

  function signupFB(res) {
    const facebookresponse = {
      Name: res.name,
      email: res.email,
      token: res.accessToken,
      Image: res.picture.data.url,
      ProviderId: "Facebook",
    };
    dispatch(siginToFacebook(facebookresponse));
  }

  const dispatch = useDispatch();
  let submit = true;

  const userSigninGG = useSelector((state) => state.userSigninGG);
  const { data } = userSigninGG;

  const userSigninFB = useSelector((state) => state.userSigninFB);
  const { datafb } = userSigninFB;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const validateFormLogin = () => {
    if (!validUserName.test(userName)) {
      setErrorUserName(true);
      submit = false;
    }
    if (!validPassword.test(password)) {
      setErrorPassword(true);
      submit = false;
    }
  };
  const submidHandler = (e) => {
    e.preventDefault();
    validateFormLogin();
    submit && dispatch(signin(userName, password));
  };
  const responseGoogle = (response) => {
    var res = response.profileObj;
    signup(response);
  };

  const responseFacebook = (response) => {
    var res = response.profileObj;
    signupFB(response);
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    if (data) {
      if (data.username === null) {
        props.history.push(`/form-info`);
      } else {
        dispatch(signin(data.username, data.password));
      }
    }
    if (datafb) {
      if (datafb.username === null) {
        props.history.push(`/form-info`);
      } else {
        dispatch(signin(datafb.username, datafb.password));
      }
    }
  }, [props.history, redirect, userInfo, data, datafb]);
  useEffect(() => {
    submit = true;
  }, [errorUserName, errorPassword]);
  return (
    <div
      style={{
        backgroundColor: "#492c7c",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image1})`,
          width: "65rem",
          height: "37.5rem ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: "#492c7c",
          minWidth: "75rem",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div className="signin">
          <div className="modal__header">
            <h1>Đăng nhập</h1>
          </div>
          <div>
            {loading && ""}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <form className="form" onSubmit={submidHandler}>
              <div className="mr__bt">
                <input
                  className="ant-input form-control"
                  type="text"
                  id="username"
                  placeholder="Nhập vào tên tài khoản ..."
                  required
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setErrorUserName(false);
                  }}
                ></input>
                {errorUserName && (
                  <p className="invalid">Tên đăng nhập không hợp lệ!</p>
                )}
              </div>
              <div className="mr__bt">
                <input
                  className="ant-input form-control"
                  type="password"
                  id="password"
                  placeholder="Nhập vào mật khẩu ..."
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorPassword(false);
                  }}
                ></input>

                {errorPassword && (
                  <p className="invalid">Mật khẩu không hợp lệ!</p>
                )}
              </div>
              <button
                className="mr__bt ant-btn ant-btn-primary btn btn_orange w100"
                type="submit"
              >
                Đăng nhập
              </button>
              <div className="mr__bt">
                <div className="formLogin__or">
                  <span>Hoặc</span>
                </div>
                <div className="_1ix216">
                  <FacebookLogin
                    cssClass="dJsOUU _1A307B _1tEaLw _1A307B _2ph_NL"
                    appId="4360449750706411"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="Facebook"
                    icon="fa-facebook"
                  ></FacebookLogin>
                  <GoogleLogin
                    className="dJsOUU _1A307B _1tEaLw _1A307B _1SPkQc"
                    clientId="662863314372-eihnc6tpkmgvdqkgs0179di65p9mvik7.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  ></GoogleLogin>
                  <button className="dJsOUU _1A307B _1tEaLw _1A307B nvH7Oz">
                    <div className="_1b1OLX">
                      <div className="_1JEYOo social-white-background social-white-apple-png"></div>
                    </div>
                    <div className="_1iDCwS">Apple</div>
                  </button>
                </div>
              </div>
              <div className="mr__bt">
                <p>
                  Bạn chưa có tài khoản ? &nbsp;
                  <span>
                    <Link to={`/register`}>Đăng ký</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
