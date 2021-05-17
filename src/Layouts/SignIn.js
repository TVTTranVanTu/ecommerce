import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { siginToGoogle, signin } from '../Actions/UserAction';
import MessageBox from '../Components/boxInfor/MessageBox';
function SingIn(props) {

    function signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        dispatch(siginToGoogle(googleresponse));
    };
    const userSigninGG = useSelector(state => state.userSigninGG);
    const { data } = userSigninGG;


    if (data) {
        const { id } = data;
        props.history.push(`/form-info.${id}`);
    }

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector((state) => state.userSignin);
    const { loading, error, userInfo } = userSignin;

    const submidHandler = (e) => {
        e.preventDefault();
        dispatch(signin(userName, password));
    }
    const responseGoogle = (response) => {
        var res = response.profileObj;
        signup(response);
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
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
                <div className="signin">
                    <div className="modal__header">
                        <h1>Đăng nhập</h1>

                    </div>
                    <div>
                        {loading && ('')}
                        {error && (<MessageBox variant="danger">{error}</MessageBox>)}
                        <form className="form" onSubmit={submidHandler} >
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="text" id="username" placeholder="Nhập vào tên tài khoản ..." required
                                    onChange={(e) => setUserName(e.target.value)}></input>
                            </div>
                            <div className="mr__bt">
                                <input className="ant-input form-control" type="password" id="password" placeholder="Nhập vào mật khẩu ..." required
                                    onChange={(e) => setPassword(e.target.value)}>
                                </input>
                            </div>
                            <button className="mr__bt ant-btn ant-btn-primary btn btn_orange w100" type="submit">Đăng nhập</button>
                            <div className="mr__bt">
                                <div className="formLogin__or">
                                    <span>Hoặc</span>
                                </div>

                                <div className="_1ix216">
                                    <button className="dJsOUU _1A307B _1tEaLw _1A307B _2ph_NL">
                                        <div className="_1b1OLX">
                                            <div className="_1JEYOo social-white-background social-white-fb-png">
                                            </div>
                                        </div>
                                        <div className="_1iDCwS _28-Tq8">Facebook</div>
                                    </button>
                                    <GoogleLogin
                                        className="dJsOUU _1A307B _1tEaLw _1A307B _1SPkQc"
                                        clientId="662863314372-lobjk150l82p9r0p60m3th41of3rau1a.apps.googleusercontent.com"
                                        buttonText="Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle} ></GoogleLogin>
                                    <button className="dJsOUU _1A307B _1tEaLw _1A307B nvH7Oz">
                                        <div className="_1b1OLX">
                                            <div className="_1JEYOo social-white-background social-white-apple-png">
                                            </div>
                                        </div>
                                        <div className="_1iDCwS">Apple</div>
                                    </button>
                                </div>
                            </div>
                            <div className="mr__bt">
                                <p>Bạn chưa có tài khoản ? &nbsp;
                                    <span>
                                        <Link to={`/register`}>Đăng ký</Link>
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

export default SingIn;