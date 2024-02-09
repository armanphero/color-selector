import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import auth from '../../configs/firebase.config';

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const userInfo = {
        user,
        setUser,
        googleSignIn,
        setIsLoading,
        isLoading
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
            console.log(user);
        })
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={userInfo}>
            <div>
                {children}
                <ToastContainer />
            </div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;