import React from 'react';
import { Link } from 'react-router-dom';


function Profile(props) {
    return (
        <div className="my-account-section">
            <div className="my-account-section__header">
                <div className="my-account-section__header-left">
                    <div className="my-account-section__header-title">Hồ sơ của tôi</div>
                    <div className="my-account-section__header-subtitle">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                </div>
            </div>
            <div className="my-account-profile">
                <div className="my-account-profile__left">
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Tên đăng nhập</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="my-account__inline-container">
                                    <div className="my-account__input-text">lam_ngoc_huy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Tên</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="input-with-validator">
                                    <input type="text" placeholder="Lâm Ngọc Huy" maxlength="255"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Email</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="my-account__inline-container">
                                    <div className="my-account__input-text">ln****@gmail.com</div>
                                    <button type="button" className="my-account__no-background-button my-account-profile__change-button">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Số điện thoại</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="my-account__inline-container">
                                    <div className="my-account__input-text"></div>
                                    <Link to="/account/phone">
                                        <button type="button" className="my-account__no-background-button my-account-profile__change-button">
                                            Thêm
                                        </button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Tên Shop</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="input-with-validator">
                                    <input type="text" placeholder="lam_ngoc_huy" maxlength="255"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Giới tính</label>
                            </div>
                            <div className="input-with-label__content">
                                <div className="my-account-profile__gender">
                                    <label for="nam" className="radio">
                                        <input type="radio" name="gender" id="nam" className="radio__input" />
                                        <div className="radio__radio"></div>
                                        Nam
                                    </label>
                                    <label for="nu" className="radio">
                                        <input type="radio" name="gender" id="nu" className="radio__input" />
                                        <div className="radio__radio"></div>
                                        Nữ
                                    </label>
                                    <label for="khac" className="radio">
                                        <input type="radio" name="gender" id="khac" className="radio__input" />
                                        <div className="radio__radio"></div>
                                        Khác
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                            <div className="input-with-label__label">
                                <label>Ngày sinh</label>
                            </div>
                            <div className="input-with-label__content">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-account-profile__right">
                    <div className="avatar-uploader">
                        <div className="avatar-uploader__avatar">
                            <div className="avatar-uploader__avatar-image">
                            </div>
                        </div>
                        <input className="avatar-uploader__file-input" type="file" accept=".jpg,.jpeg,.png" />
                        <button type="button" className="btn btn-light btn--m btn--inline">Chọn ảnh</button>
                        <div className="avatar-uploader__text-container">
                            <div className="avatar-uploader__text">Dụng lượng file tối đa 1 MB</div>
                            <div className="avatar-uploader__text">Định dạng:.JPEG, .PNG</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;