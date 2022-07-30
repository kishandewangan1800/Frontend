import react, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    chart :false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children}) =>{

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider
        value={ {activeMenu ,handleClick, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize}}
        >
            {children}
            
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);