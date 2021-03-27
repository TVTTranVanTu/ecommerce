import React from 'react';
function Topbar(props) {
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__left">
                    <a href="#" className="space">Kênh người bán</a>
                    <a href="#" className="space">Tải ứng dụng</a>
                    <div className="space space-end">Kết nối</div>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="topbar__right">
                    <ul className="topbar__links">
                        <li className="topbar__link"><i className="far fa-bell"></i>Thông báo</li>
                        <li className="topbar__link"><i className="far fa-question-circle"></i>Trợ giúp</li>
                        <li className="topbar__link space"><a href="#">Đăng nhập</a></li>
                        <li className="topbar__link"><a href="#">Đăng ký</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;