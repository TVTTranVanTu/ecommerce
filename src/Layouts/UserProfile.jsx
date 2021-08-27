import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import BillOrder from "../Components/accountInfo/BillOrder";
import NotificationOrder from "../Components/accountInfo/NotificationOrder";
import Profile from "../Components/accountInfo/Profile";
import UserPhone from "../Components/accountInfo/UserPhone";

function UserProfile(props) {
  const [hidden, setHidden] = useState("none");
  return (
    <Router>
      <div className="container">
        <div className="user-profile">
          <div className="userpage-sidebar">
            <div className="userpage-brief">
              <a href="#" className="userpage-brief__avatar">
                <div className="user-avatar">
                  <img
                    className="user-avatar__img"
                    src="https://cf.shopee.vn/file/5f124aa512e665915146f70c5f654b98_tn"
                    alt="avatar"
                  />
                </div>
              </a>
              <div className="userpage-brief__right">
                <div className="userpage-brief__username">alex@123</div>
                <a href="#" className="userpage-brief__edit">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "4px" }}
                  >
                    <path
                      d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                      fill="#9B9B9B"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  Sửa hồ sơ
                </a>
              </div>
            </div>

            <ul className="sidebar">
              <li>
                <Link
                  onClick={() => {
                    setHidden("account");
                  }}
                  to="/account"
                >
                  <div className="sidebar-menu-entry">
                    <div
                      className="sidebar-menu-entry__icon"
                      style={{ backgroundColor: "rgb(255, 193, 7)" }}
                    >
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="shopee-svg-icon user-page-sidebar-icon icon-headshot"
                      >
                        <g>
                          <circle
                            cx="7.5"
                            cy="4.5"
                            fill="none"
                            r="3.8"
                            strokeMiterlimit="10"
                          ></circle>
                          <path
                            d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="sidebar-menu-entry__text">
                      Tài khoản của tôi
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/account/order">
                  <div className="sidebar-menu-entry">
                    <div
                      className="sidebar-menu-entry__icon"
                      style={{ backgroundColor: "rgb(68, 181, 255)" }}
                    >
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="shopee-svg-icon user-page-sidebar-icon "
                        style={{ fill: "rgb(255, 255, 255)" }}
                      >
                        <g>
                          <rect
                            fill="none"
                            height="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            width="8"
                            x="4.5"
                            y="1.5"
                          ></rect>
                          <polyline
                            fill="none"
                            points="2.5 1.5 2.5 13.5 12.5 13.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></polyline>
                          <line
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="6.5"
                            x2="10.5"
                            y1="4"
                            y2="4"
                          ></line>
                          <line
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="6.5"
                            x2="10.5"
                            y1="6.5"
                            y2="6.5"
                          ></line>
                          <line
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="6.5"
                            x2="10.5"
                            y1="9"
                            y2="9"
                          ></line>
                        </g>
                      </svg>
                    </div>
                    <div className="sidebar-menu-entry__text">Đơn mua</div>
                  </div>
                </Link>
              </li>
              <li>
                <div
                  onClick={() => {
                    setHidden("tb");
                  }}
                >
                  <div className="sidebar-menu-entry">
                    <div
                      className="sidebar-menu-entry__icon"
                      style={{ backgroundColor: "rgb(238, 77, 45)" }}
                    >
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x="0"
                        y="0"
                        className="shopee-svg-icon user-page-sidebar-icon "
                      >
                        <g>
                          <path
                            d="m12 10.2 1.5 2h-12l1.5-2v-7.4c0-.5.5-1 1-1h7c .6 0 1 .5 1 1z"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                          ></path>
                          <path
                            d="m6 2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5"
                            fill="none"
                            strokeMiterlimit="10"
                          ></path>
                          <path d="m5.8 13.5c.4.6 1 1 1.8 1s1.4-.4 1.8-1z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="sidebar-menu-entry__text">Thông báo</div>
                  </div>
                </div>
                <ul
                  style={{ display: `${hidden === "tb" ? "block" : "none"}` }}
                  className="subnav"
                >
                  <li>
                    <Link to="/account/notification">Cập nhật đơn hàng</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <Route path="/account" exact component={Profile}></Route>
            <Route
              path="/account/phonenumber"
              exact
              component={UserPhone}
            ></Route>
            <Route path="/account/order" exact component={BillOrder}></Route>
            <Route
              path="/account/notification"
              exact
              component={NotificationOrder}
            ></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default UserProfile;
