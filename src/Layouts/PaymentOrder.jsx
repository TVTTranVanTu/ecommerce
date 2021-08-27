import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../Constants/orderConstants";

function PaymentOrder(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const placeOrderHandler = () => {
    if (userInfo) {
      dispatch(
        createOrder({
          itemList: cartItems,
          billingInfo: shippingAddress,
          user: userInfo.userDto,
        })
      );
    }
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <div className="_1iurwE">
        <div className="_1G9Cv7"></div>
        <div className="_1gkIPw">
          <div className="_1TKMuK">
            <div className="_20Qrq_">
              <svg
                height="16"
                viewBox="0 0 12 16"
                width="12"
                className="shopee-svg-icon icon-location-marker"
              >
                <path
                  d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                  fillRule="evenodd"
                ></path>
              </svg>
              Địa chỉ nhận hàng
            </div>
          </div>
          <div className="Jgz_oc">
            <div className="_2Pe7Hh">
              <div className="_3E850P">{`${cart.shippingAddress.fullName}  ${cart.shippingAddress.phoneNumber}`}</div>
              <div className="_2F7jaW">{`${cart.shippingAddress.address}, ${cart.shippingAddress.ward}, ${cart.shippingAddress.district},${cart.shippingAddress.city}`}</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="_1p19xl">
        <div className="ktZs2X">
          <div className="_1_W4l_">
            <div className="_3GZI6L mpT3lP">
              <div className="_3NO6B5">Sản phẩm</div>
            </div>
            <div className="_3GZI6L _2vvZhb"></div>
            <div className="_3GZI6L">Đơn giá</div>
            <div className="_3GZI6L">Số lượng</div>
            <div className="_3GZI6L _17w1DK">Thành tiền</div>
          </div>
        </div>
        <div>
          <div className="jNDkp2">
            <div>
              <div className="QjLA16">
                <div className="_1oOvbg">
                  {cartItems.map((item) => (
                    <div className="_3HkBPE _3vbMPD" key={item.product}>
                      <div className="_1ASQkt _2rJzUE">
                        <img
                          alt="img"
                          className="_1Qtf1H"
                          src={item.productThumbnail}
                          width="40"
                          height="40"
                        />
                        <span className="_11r44J">
                          <span className="_3F5vLQ">{`[${item.postTitle}] ${item.productName}`}</span>
                        </span>
                      </div>
                      <div className="_1ASQkt Aw_HtH"></div>
                      <div className="_1ASQkt">₫{item.productPrice}</div>
                      <div className="_1ASQkt">{item.qty}</div>
                      <div className="_1ASQkt _2z5WqO">
                        ₫{item.productPrice * item.qty}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f23wB9">
        <div className="qXX2_B">
          <div>
            <div className="checkout-payment-method-view__current checkout-payment-setting">
              <div className="checkout-payment-method-view__current-title">
                Phương thức thanh toán
              </div>
              <div className="checkout-payment-setting__payment-methods-tab">
                <span>
                  <button className="product-variation" disabled>
                    Ví AirPay
                  </button>
                </span>
                <span>
                  <button className="product-variation" disabled>
                    Thẻ Tín dụng/Ghi nợ
                  </button>
                </span>
                <span>
                  <button className="product-variation" disabled>
                    Thẻ ATM nội địa (Internet Banking)
                  </button>
                </span>
                <span>
                  <button className="product-variation product-variation--selected">
                    Thanh toán khi nhận hàng
                    <div className="product-variation__tick">
                      <svg
                        enableBackground="new 0 0 12 12"
                        viewBox="0 0 12 12"
                        x="0"
                        y="0"
                        className="shopee-svg-icon icon-tick-bold"
                      >
                        <g>
                          <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="PC1-mc">
          <div className="_1i3wS2 _1X3--o _3QL9JJ">Tổng thanh toán:</div>
          <div className="_1i3wS2 _20-5lO lsNObX _3QL9JJ">
            ₫{cartItems.reduce((a, b) => a + b.productPrice * b.qty, 0)}
          </div>
          <div className="_3Q9F5R _1Q3ggw">
            <div className="_2xyh_G">
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
              <a
                href="https://shopee.vn/legaldoc/policies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Điều khoản Shopee
              </a>
            </div>
            <button
              className="stardust-button stardust-button--primary stardust-button--large _1qSlAe _2a74ER"
              onClick={placeOrderHandler}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOrder;
