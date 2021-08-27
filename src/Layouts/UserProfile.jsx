import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { userDetailAction } from "../Actions/UserAction";
import BillOrder from "../Components/accountInfo/BillOrder";
import NotificationOrder from "../Components/accountInfo/NotificationOrder";
import Profile from "../Components/accountInfo/Profile";
import UserPhone from "../Components/accountInfo/UserPhone";

function UserProfile(props) {
  const [hidden, setHidden] = useState("none");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo } = userSignin;
  return (
    <Router>
      {loading
        ? ""
        : userInfo && (
            <div className="container">
              <div className="user-profile">
                <div className="userpage-sidebar">
                  <div className="userpage-brief">
                    <div className="userpage-brief__avatar">
                      <div className="user-avatar">
                        <img
                          className="user-avatar__img"
                          src={
                            userInfo
                              ? userInfo.userDto.avatar
                              : "https://cf.shopee.vn/file/5f124aa512e665915146f70c5f654b98_tn"
                          }
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="userpage-brief__right">
                      <div className="userpage-brief__username">
                        {userInfo.userDto.username}
                      </div>
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
                          <div className="sidebar-menu-entry__text">
                            Đơn mua
                          </div>
                        </div>
                      </Link>
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
                  <Route
                    path="/account/order"
                    exact
                    component={BillOrder}
                  ></Route>
                  <Route
                    path="/account/notification"
                    exact
                    component={NotificationOrder}
                  ></Route>
                </div>
              </div>
            </div>
          )}
    </Router>
  );
}

export default UserProfile;
