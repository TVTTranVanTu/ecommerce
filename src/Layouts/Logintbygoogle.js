import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
export class Logintbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        // IxQrpO-jQMuSjnh7X3VSWo54
        axios.post('https://shopee-ecommerce-nh7.herokuapp.com/api/login/google', googleresponse)
            .then((result) => {
                let responseJson = result;
                console.log("responsr" + responseJson);
                sessionStorage.setItem("userData", JSON.stringify(result));
                this.props.history.push('/')
            });
    };
    render() {
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.signup(response);
        }
        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Login With Google Using ReactJS
            </div>
                </div>
                <div className="row">
                    <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="662863314372-lobjk150l82p9r0p60m3th41of3rau1a.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle} ></GoogleLogin>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logintbygoogle