import React from 'react';

function SellerLogin(props) {
    return (
        <div className="seller-login">
            <div className="container">
                <div className="infor">
                    <div className="text">
                        <div className="title">
                            Bán hàng chuyên nghiệp
                        </div>
                        <div className="subtitle">
                            Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người bán
                        </div>
                    </div>
                    <div className="image"></div>
                </div>
                <div className="center"></div>
                <div className="form-login">
                    <div className="signin-panel">
                        <div className="signin-seller">
                            <div className="signin-form">
                                <div className="signin-title">
                                    Đăng nhập vào kênh người bán
                                </div>
                                <form className="form">
                                    <div className="form-item">
                                        <label for="username" className="form-item__label empty"></label>
                                        <div className="form-item__control">
                                            <div className="form-item__content">
                                                <div className="input" max-length="100">
                                                    <div className="input__inner input__inner--large">
                                                        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" size="large" resize="vertical" rows="2" minrows="2" autocomplete="username" restrictiontype="input" max="Infinity" min="-Infinity" className="input__input" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <label for="password" className="form-item__label empty"></label>
                                        <div className="form-item__control">
                                            <div className="form-item__content">
                                                <div className="input" max-length="15">
                                                    <div className="input__inner input__inner--large">
                                                        <input type="password" placeholder="Mật khẩu" size="large" resize="vertical" rows="2" minrows="2" autocomplete="username" restrictiontype="input" max="Infinity" min="-Infinity" className="input__input" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="remember">
                                        <label className="checkbox">
                                            <input type="checkbox" className="checkbox__input" value="Nhớ tôi" />
                                            <span className="checkbox__indicator">
                                                <i className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 
                                                    7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 
                                                    L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                            <span className="checkbox__label">
                                                Nhớ tôi
                                            </span>
                                        </label>
                                        <a href="//shopee.vn/buyer/login/reset/?next=https%3A%2F%2Fbanhang.shopee.vn" target="_blank" className="button button--link button--normal underline">
                                            <span>
                                                Quên mật khẩu?
                                        </span>
                                        </a>
                                    </div>
                                    <div className="form-item">
                                        <label className="form-item__label empty">
                                        </label>
                                        <div className="form-item__control">
                                            <div className="form-item__content">
                                                <button type="button" className="button button--primary button--large button--block">
                                                    <span>
                                                        Đăng nhập
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerLogin;