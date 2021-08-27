import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../Actions/CartAction";

function ShippingAddress(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [district, setDistrict] = useState(shippingAddress.district);
  const [phoneNumber, setPhonenumber] = useState(shippingAddress.phoneNumber);
  const [ward, setWard] = useState(shippingAddress.ward);

  const dispatch = useDispatch();
  const submidHandle = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        district,
        phoneNumber,
        ward,
      })
    );
    props.history.push("/payment");
  };
  return (
    <div className="_2IJN-0">
      <div className="_1lzg0h">
        <form onSubmit={submidHandle}>
          <div>
            <div className="shopee-popup-form address-modal">
              <div className="shopee-popup-form__header">
                <div className="shopee-popup-form__title">Địa chỉ mới</div>
              </div>
              <div className="shopee-popup-form__main">
                <div className="shopee-popup-form__main-container">
                  <div></div>
                  <div className="address-modal__message">
                    Để đặt hàng, vui lòng thêm địa chỉ nhận hàng
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Họ và tên</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Họ và tên"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Số điện thoại</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Số điện thoại"
                          value={phoneNumber}
                          onChange={(e) => setPhonenumber(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Tỉnh/Thành phố</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Tỉnh/Thành phố"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Quận/Huyện</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Quận/Huyện"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Phường/ Xã</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Phường/ Xã"
                          value={ward}
                          onChange={(e) => setWard(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input">
                    <div className="-cdiFe">
                      <div className="_3ZW3SX">
                        <div className="_2PIkC2">Toà nhà, Tên Đường...</div>
                        <input
                          className="_2D9bmD"
                          type="text"
                          placeholder="Toà nhà, Tên Đường..."
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="address-modal__form_input address-modal__select-location">
                    <svg
                      height="16"
                      viewBox="0 0 12 16"
                      width="12"
                      className="shopee-svg-icon icon-location-marker"
                    >
                      <path
                        d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 
                                        5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 
                                        9.933C1.613 11.743 0 8.498 0 6z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <div className="address-modal__select-location-main">
                      <div className="address-modal__select-location-main-text">
                        Chọn vị trí trên bản đồ
                      </div>
                      <div className="address-modal__select-location-main-subtext">
                        Giúp đơn hàng được giao nhanh nhất
                      </div>
                    </div>
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-right"
                    >
                      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                    </svg>
                  </div>
                  <div className="uuvK6n"></div>
                </div>
              </div>
              <div className="shopee-popup-form__footer">
                <button
                  className="cancel-btn"
                  onClick={() => props.history.push("/cart")}
                >
                  Trở Lại
                </button>
                <button
                  type="submit"
                  className="btn btn-solid-primary btn--s btn--inline _1wSE68"
                >
                  Hoàn thành
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShippingAddress;
