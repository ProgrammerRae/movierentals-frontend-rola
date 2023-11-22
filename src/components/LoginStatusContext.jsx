import React, { createContext, useState, useContext } from 'react';

const LoginStatusContext = createContext();

export function LoginStatusProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
            {children}
        </LoginStatusContext.Provider>
    );
}

export function useLoginStatus() {
    const context = useContext(LoginStatusContext);
    if (context === undefined) {
        throw new Error('useLoginStatus must be used within a LoginStatusProvider');
    }
    return context;
}
