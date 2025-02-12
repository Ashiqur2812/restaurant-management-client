import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase_init';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light'); 
    const googleProvider = new GoogleAuthProvider();

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Sign in with Google
    const googleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Toggle between dark and light mode
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); 
    };

    // Detect system preference for dark/light mode
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
    }, []);

    // Apply theme to the document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Handle authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log('CurrentUser-->', currentUser);
            if (currentUser?.email) {
                setUser(currentUser);
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/jwt`,
                    {
                        email: currentUser?.email,
                    },
                    { withCredentials: true }
                );
                // console.log(data);
            } else {
                setUser(currentUser);
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/logout`,
                    { withCredentials: true }
                );
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const info = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleAuth,
        theme,
        toggleTheme, 
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;