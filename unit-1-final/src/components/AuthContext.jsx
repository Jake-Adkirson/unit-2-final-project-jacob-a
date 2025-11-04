import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = (user) => setCurrentUser(user);

    const logout = () => setCurrentUser(null);

    const isLoggedIn = !!currentUser;

    const value = { currentUser, login, logout, isLoggedIn };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;