import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Actions/UserAction';
function Topbar(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { loading, userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__left">
                    <Link to="/seller-login" className="space">Kênh người bán</Link>
                    <Link to="/taiungdung" className="space">Tải ứng dụng</Link>
                    <div className="space space-end">Kết nối</div>
                    <div className="social">
                        <a href="https://www.facebook.com/ShopeeVN"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/Shopee_VN"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="topbar__right">
                    <ul className="topbar__links">
                        <li className="topbar__link"><i className="far fa-bell"></i>Thông báo</li>
                        <li className="topbar__link"><i className="far fa-question-circle"></i>Trợ giúp</li>
                        <li className="topbar__link ">
                            {
                                loading ? ('') :
                                    userInfo ? (
                                        <div className="stardust-popover">
                                            <div className="stardust-popover__target">
                                                <div className="navbar__link--account__container">
                                                    <div className="shopee-avatar">
                                                        <div className="shopee-avatar__placeholder">
                                                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-headshot">
                                                                <g>
                                                                    <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit="10"></circle>
                                                                    <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit="10"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <img className="shopee-avatar__img" src="https://cf.shopee.vn/file/5f124aa512e665915146f70c5f654b98_tn" />
                                                    </div>
                                                    <div className="navbar__username">{userInfo.userDto.username}</div>
                                                </div>
                                            </div>
                                            <div className="account__content">
                                                <div className="triangle-up"></div>
                                                <div className="account__infor bd__bt">
                                                    <Link to="/account">
                                                        <i className="fas fa-user-circle"></i>
                                                        <span>Tài khoản của tôi</span>
                                                    </Link>

                                                </div>
                                                <div className="history bd__bt">
                                                    <i className="fas fa-history"></i>
                                                    <span>Đơn mua</span>
                                                </div>
                                                <div className="sign__out">
                                                    <i className="fas fa-sign-out-alt"></i>
                                                    <Link to="#signout" onClick={signoutHandler}>Đăng xuất</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="reg__login">
                                            <Link to="/signin" className="space">Đăng nhập</Link>
                                            <Link to="/register" className="re-end">Đăng ký</Link>
                                        </div>
                                    )
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;