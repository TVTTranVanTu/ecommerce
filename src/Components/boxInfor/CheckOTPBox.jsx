import React, { useState } from "react";
import { useSelector } from "react-redux";
import RegisterBox from "./RegisterBox";

function CheckOTPBox(props) {
  const [codeValue, setCodeValue] = useState();
  const [hidden, setHidden] = useState(true);

  const codeotp = useSelector((state) => state.codeotp);
  const { loading, code } = codeotp;
  code && console.log(code.otp);
  return (
    <div>
      {loading ? (
        ""
      ) : (
        <div
          className="check-otp__box"
          style={{ display: ` ${hidden === false ? "none" : "block"}` }}
        >
          <div className="check-modal__header">
            <h1>Nhập mã OTP</h1>
          </div>
          <div className="form-check">
            <div className="mr__bt">
              <input
                className="ant-input form-control"
                type="text"
                placeholder="Nhập vào mã OTP để xác nhận ..."
                onChange={(e) => {
                  setCodeValue(e.target.value);
                }}
              />
            </div>
            <div className="mr__bt">
              <button
                className="mr__bt ant-btn ant-btn-primary btn btn_orange w100"
                onClick={() => {
                  if (String(codeValue) === String(code.otp)) {
                    setHidden(false);
                  }
                }}
              >
                Xác nhận
              </button>
            </div>
            <p className="mr__bt">Mã OTP đã được gửi về email của bạn</p>
          </div>
        </div>
      )}
      <div style={{ display: ` ${hidden === true ? "none" : "block"}` }}>
        <RegisterBox
          email={props.email}
          redirect={props.redirect}
          history={props.history}
        />
      </div>
    </div>
  );
}

export default CheckOTPBox;
