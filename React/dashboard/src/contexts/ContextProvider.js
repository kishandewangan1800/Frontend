import react, { createContext, useContext, useState } from "react";
import avatar from '../data/avatar.jpg'

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [login, setLogin] = useState(false);
  const [profilePic, setProfilePic] = useState(avatar);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] =useState("")


  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) =>{
    handleClose();
    setIsClicked(isClicked => 
      ({...isClicked, [clicked]: true}));
  } 
  
  const handleClose = () =>{
    setIsClicked(initialState);
  } 
  

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        handleClick,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setMode,
        setColor,
        login,
        setLogin,
        handleClose,
        profilePic, setProfilePic,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
