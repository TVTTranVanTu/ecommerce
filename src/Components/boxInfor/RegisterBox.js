import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Actions/UserAction';
import MessageBox from '../boxInfor/MessageBox';
import LoadingBox from '../boxInfor/LoadingBox';
function RegisterBox(props) {
    const { redirect } = props;
    const { email } = props;
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !password) {
            alert('Password and confirm password are not match');
        } else {
            dispatch(register(name, email, password));
        }
    };


    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);

        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="register-box">
            {loading && <LoadingBox />}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <form onSubmit={submitHandler} className="form-register">
                <div className="mr__bt">
                    <input className="ant-input form-control" type="text" id="name" placeholder="Nhập vào tên đăng nhập ..." required
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div className="mr__bt">
                    <input className="ant-input form-control" type="password" id="password" placeholder="Nhập vào mật khẩu ..." required
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <button className="mr__bt ant-btn ant-btn-primary btn btn_orange w100" type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterBox;