import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Actions/UserAction";
import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";
import { validPassword, validUserName } from "../../regex";
function RegisterBox(props) {
  const { redirect } = props;
  const { email } = props;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  let submit = true;

  const validate = () => {
    if (!validUserName.test(name)) {
      setErrorName(true);
      submit = false;
    }
    if (!validPassword.test(password)) {
      setErrorPassword(true);
      submit = false;
    }
  };
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    validate();
    submit && dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  useEffect(() => {
    submit = true;
  }, [errorName, errorPassword]);
  return (
    <div className="register-box">
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form onSubmit={submitHandler} className="form-register">
        <div className="mr__bt">
          <input
            className="ant-input form-control"
            type="text"
            id="name"
            placeholder="Nhập vào tên đăng nhập ..."
            required
            onChange={(e) => {
              setName(e.target.value);
              setErrorName(false);
            }}
          ></input>
          {errorName && <p className="invalid">Tên đăng nhập không hợp lệ!</p>}
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
          {errorPassword && <p className="invalid">Mật khẩu không hợp lệ!</p>}
        </div>
        <button
          className="mr__bt ant-btn ant-btn-primary btn btn_orange w100"
          type="submit"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default RegisterBox;
