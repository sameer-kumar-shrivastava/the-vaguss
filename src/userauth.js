import React,{useState, createContext} from "react";

export const UserContext =  createContext();

export const UserProvider = props =>{
    const [loggedIn,setloggedIn] = useState('Loggedin');

    return(
        <UserContext.Provider value={[loggedIn,setloggedIn]}>{props.children}</UserContext.Provider>
    );
} 