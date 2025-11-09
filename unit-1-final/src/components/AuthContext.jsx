import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            if (!token) {
                setCurrentUser(null);
                setLoading(false);
                return;
            }
            console.log("Current token before fetch:", token)
            try {
                const res = await fetch("http://localhost:8080/users/current", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
            });

            if (!res.ok) {
                throw new Error("Failed to fetch current user");
            }

            const data = await res.json();
            setCurrentUser(data);
            } catch (err) {
                console.error("Error fetching current user: ", err);
                setCurrentUser(null);
                localStorage.removeItem("token");
                setToken(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, [token])

    const login = async (email, password) => {
        try {
            const res = await fetch("http://localhost:8080/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) throw new Error ("Login failed");

            const data = await res.json();

            const userRes = await fetch("http://localhost:8080/users/current", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                }
            });

            if (!userRes.ok) throw new Error("Failed to fetch user after login");

            const userData = await userRes.json();
            setCurrentUser(userData);
            setToken(data.token);
            localStorage.setItem("token", data.token);
        } catch (err) {
            console.error("Login error: ", err);
            throw err;
        }
    };

    const logout = () => {
        setCurrentUser(null);
        setToken(null);
        localStorage.removeItem("token");
    }
    return <AuthContext.Provider value={{ currentUser, token, login, logout, loading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;