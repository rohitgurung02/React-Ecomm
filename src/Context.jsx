import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: ""
}

const AppProvider = ({ children }) => { // Correct prop name is "children"

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "The Developer",
                    image: "./images/hero.svg"
                }
            }
        )
    }

    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "The Programmer",
                    image: "./images/about1.svg"
                }
            }
        )
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
