import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("auth-user")) || null);
    const login = (user) => {
        setUser(user);
        window.localStorage.setItem("auth-user", user);
    };
    const logout = () => {
        setUser(null);
        window.localStorage.setItem("auth-user", null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
