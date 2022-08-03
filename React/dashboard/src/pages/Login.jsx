import { logWithIn } from "@syncfusion/ej2-react-charts";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useStateContext } from "../contexts/ContextProvider";
import { FcGoogle } from "react-icons/fc";

import logo from '../assets/logo.png'

import shareVideo from "../assets/share.mp4";

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

function Login() {
    const { login, setLogin } = useStateContext();

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setLogin(true);
    };

    const onLoginFailure = (res) => {
        document.write("Login Failed:", res);
    };

    const onSignoutSuccess = () => {
        // alert("You have been logged out successfully");
        // console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
        setLogin(false);
    };

    return (
        <div className="flex justify-start items-center flex-col h-screen ">
            <div className="relative w-full h-full">
                <img src="https://cdn.dribbble.com/users/13496/screenshots/1327531/analytics-app.gif" alt="" className="w-full h-full object-cover"/>
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0"
                >
                <div className="p-5">
                    {/* <img src={logo} alt="logo" width="130px" /> */}
                </div>
                <div className="shadow-2xl bg-white rounded-md">
                    {showloginButton ? (
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign In"
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={"single_host_origin"}
                            isSignedIn={true}
                            onClick={() => { }}
                            render={(renderProps) => (
                                <button
                                    type="button"
                                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className="mr-4" />
                                    Sign in with Google
                                </button>
                            )}
                        />
                    ) : null}

                    {showlogoutButton ? (
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                            onClick={() => { }}
                        ></GoogleLogout>
                    ) : null}
                </div>
            </div>
        </div>
        </div>

    );
}
export default Login;
