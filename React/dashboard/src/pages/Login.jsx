import { logWithIn } from "@syncfusion/ej2-react-charts";
import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useStateContext } from "../contexts/ContextProvider";
import { FcGoogle } from "react-icons/fc";


const clientId = '1061920707292-s5tiki35dibac7h5s6jfnqpqmucfhg4m.apps.googleusercontent.com';

function Login() {
    const { login, setLogin, setProfilePic,setFirstName, setLastName, setEmail  } = useStateContext();

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = async (res) => {
        // console.log('Login Success:', res.profileObj);
       try{
        const response = await res.profileObj
        const image = await response.imageUrl;
        await setEmail(response.email);
        await setFirstName(response.givenName)
        await setLastName(response.familyName)
        await setProfilePic(image)
        setShowloginButton(false);
        setShowlogoutButton(true);
        await setLogin(true);
        // console.log(response.imageUrl)
       }catch(err){
        
       }
    };

    const onLoginFailure = (res) => {
        document.write("Login Failed");
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
                            // onClick={() => { }}
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

                </div>
            </div>
        </div>
        </div>

    );
}
export default Login;