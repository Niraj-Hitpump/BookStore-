import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Add this import

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children} {/* Render children */}
        </AuthContext.Provider>
    );
}

// Add prop validation for children
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
