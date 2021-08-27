import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkOtp } from "../Actions/UserAction";
import CheckOTPBox from "../Components/boxInfor/CheckOTPBox";
import background from "../assets/background.png";
import { validateEmail } from "../regex";

function Register(props) {
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  let submit = true;
  const [errorEmail, setErrorEmail] = useState(false);

  const validate = () => {
    if (!validateEmail.test(email)) {
      setErrorEmail(true);
      submit = false;
    }
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    validate();
    submit && dispatch(checkOtp(email));
  };

  const checkOtpHandle = () => {
    setCheck(true);
  };
  useEffect(() => {
    submit = true;
  }, [errorEmail]);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "65rem",
          height: "37.5rem ",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: "rgb(255, 255, 255)",
          minWidth: "75rem",
          margin: "0 auto",
          position: "relative",
          backgroundColor: "#492c7c",
          opacity: `${check === true ? "0.5" : "1"}`,
        }}
      >
        <div className="register">
          <div className="modal__header">
            <h1>Đăng ký</h1>
          </div>
          <div>
            <form className="form" onSubmit={submitHandler}>
              <div className="mr__bt">
                <input
                  className="ant-input form-control"
                  type="email"
                  id="email"
                  placeholder="Nhập vào email ..."
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorEmail(false);
                  }}
                ></input>
                {errorEmail && <p className="invalid">Email không hợp lệ!</p>}
              </div>
              <button
                className="mr__bt ant-btn ant-btn-primary btn btn_orange w100"
                type="submit"
                onClick={checkOtpHandle}
              >
                Đăng ký
              </button>

              <div className="mr__bt">
                <p
                  style={{
                    paddingRight: "0.25rem",
                    fontSize: "0.875rem",
                    color: "rgba(0, 0, 0, 0.26)",
                  }}
                >
                  Bạn đã có tài khoản ? &nbsp;
                  <span>
                    <Link to={`/signin`}>Đăng Nhập</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ display: ` ${check === false ? "none" : "block"}` }}>
        <CheckOTPBox
          email={email}
          redirect={redirect}
          history={props.history}
        />
      </div>
    </div>
  );
}

export default Register;
