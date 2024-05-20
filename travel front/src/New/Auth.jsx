import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const adlogin=(usedata)=>{
        setAdmin(usedata)
    }

    const adlogout=()=>{
        setAdmin(null)
    }
    const logout = () => {
        setUser(null);
    };

  

    return (
        <AuthContext.Provider value={{user,login,logout,admin,adlogin,adlogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    // Make sure to return the context value
    return useContext(AuthContext);
};
