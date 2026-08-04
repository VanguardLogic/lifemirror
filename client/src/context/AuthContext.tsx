import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    name: string;
    email: string;
    isGuest?: boolean;
}

interface AuthContextType {
    user: User | null;
    logout: () => void;
    loginWithEmail: (email: string, name?: string) => void;
    loginAsGuest: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('lifemirror_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse stored user", e);
                localStorage.removeItem('lifemirror_user');
            }
        }
        setIsLoading(false);
    }, []);

    const logout = () => {
        localStorage.removeItem('lifemirror_user');
        setUser(null);
    };

    const loginWithEmail = (email: string, name?: string) => {
        const displayName = name || email.split('@')[0] || 'User';
        const userData: User = {
            name: displayName,
            email: email,
            isGuest: false
        };
        localStorage.setItem('lifemirror_user', JSON.stringify(userData));
        setUser(userData);
    };

    const loginAsGuest = () => {
        const guestData: User = {
            name: 'Guest User',
            email: 'guest@lifemirror.local',
            isGuest: true
        };
        localStorage.setItem('lifemirror_user', JSON.stringify(guestData));
        setUser(guestData);
    };

    return (
        <AuthContext.Provider value={{ user, logout, loginWithEmail, loginAsGuest, isAuthenticated: !!user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

