import { logWithIn } from "@syncfusion/ej2-react-charts";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useStateContext } from "../contexts/ContextProvider";

import Button from "./Button";

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

function Logout() {
    const { login, setLogin, handleClose, currentColor } = useStateContext();

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setLogin(true);
    };

    const onLoginFailure = (res) => {
        // console.log('Login Failed:', res);
        document.write("Login Failed:", res);
    };

    const onSignoutSuccess = () => {
        alert("You want to exit this page !");
        setShowloginButton(true);
        setShowlogoutButton(false);
        setLogin(false);
        handleClose();
    };

    return (
        <div>
            {showloginButton ? (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}

                />
            ) : null}

            {showlogoutButton ? (
                <GoogleLogout
                    clientId={clientId}
                    //   buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    render={(renderProps) => (
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Logout"
                            borderRadius="10px"
                            width="full"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        />

                        //     Sign in with Google
                        // </button>
                        // <Button
                        //   color="white"
                        //   bgColor={currentColor}
                        //   text="Logout"
                        //   borderRadius="10px"
                        //   width="full"
                        //   onClick={renderProps.onClick}
                        //   disabled={renderProps.disabled}
                        //   // onClick={setLogin(false)}
                        // />
                    )}
                ></GoogleLogout>
            ) : null}
        </div>
    );
}
export default Logout;
