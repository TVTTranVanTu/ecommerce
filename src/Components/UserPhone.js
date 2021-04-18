import React from 'react';

function UserPhone(props) {
    return (
        <div className="my-account-section">
            <div className="my-account-section__header">
                <div className="my-account-section__header-left">
                    <div className="my-account-section__header-title">Nhập Số Điện Thoại</div>
                    <div className="my-account-section__header-subtitle">Để bảo mật được tốt hơn, vui lòng làm theo những bước dưới đây để nhập số điện thoại.</div>
                </div>
            </div>
            <div className="my-account-section__body">
                <form>
                    <div className="_2w0KsZ">
                        <div className="nLFjB_">
                            <label className="_1ZA0f4" for="phone-number">Số điện thoại mới</label>
                        </div>
                        <div className="_1FH-Ph">
                            <input className="V-6tCR _1JsFOt" id="phone-number" type="tel" placeholder="Nhập số điện thoại của bạn" autocomplete="tel" value="" />
                        </div>
                    </div>
                    <div className="_2w0KsZ">
                        <div className="_1FH-Ph">
                            <button type="button" className="btn btn-solid-primary btn--m btn--inline _2yhzpq" aria-disabled="false">
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default UserPhone;