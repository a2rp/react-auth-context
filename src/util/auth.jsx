import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "auth-user";

const readUser = () => {
    try {
        const storedUser = window.localStorage.getItem(STORAGE_KEY);
        if (!storedUser) return null;
        const user = JSON.parse(storedUser);
        return typeof user === "string" && user.trim() ? user : null;
    } catch {
        return null;
    }
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(readUser);

    const login = (userData) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        } catch {
            // Keep the demo session active in memory when browser storage is unavailable.
        }
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        try {
            window.localStorage.removeItem(STORAGE_KEY);
        } catch {
            // The current session is still cleared from React state.
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useAuth must be used inside AuthProvider.");
    }
    return auth;
};
