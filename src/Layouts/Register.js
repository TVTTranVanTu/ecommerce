import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (
        <div style={{
            backgroundColor: "rgb(238, 77, 45)"
        }}>
            <div style={{
                backgroundImage: `url(https://cf.shopee.vn/file/d989a562877074750c02d3bed274ccd8)`,
                width: "65rem", height: "37.5rem ",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat", backgroundPosition: "center center",
                backgroundColor: "rgb(255, 255, 255)",
                minWidth: "75rem",
                margin: "0 auto",
                position: "relative"
            }}>

                <div className="register">
                    <div className="modal__header">
                        <h1>Đăng ký</h1>
                    </div>
                    <div>
                        <form className="form">
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="text" id="email" placeholder="Nhập vào tên đăng nhập ..." required
                                    onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="email" id="email" placeholder="Nhập vào email ..." required
                                    onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="password" id="password" placeholder="Nhập vào mật khẩu ..." required
                                    onChange={e => setPassword(e.target.value)}>
                                </input>
                            </div>
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu ..." required
                                    onChange={e => setConfirmPassword(e.target.value)}>
                                </input>
                            </div>
                            <button className="mr__bt ant-btn ant-btn-primary btn btn_orange w100" type="submit">Đăng ký</button>

                            <div className="mr__bt">
                                <p style={{
                                    paddingRight: "0.25rem",
                                    fontSize: "0.875rem",
                                    color: "rgba(0, 0, 0, 0.26)"
                                }}>Bạn đã có tài khoản ? &nbsp;
                                <span>
                                        <Link to={`/signin`}>Đăng Nhập</Link>
                                    </span>
                                </p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;