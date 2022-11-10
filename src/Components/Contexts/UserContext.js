import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    //Update Profile
    const updateProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //create email and password
    const createEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const logIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //googleSignIn
    const googleLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //signOut
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createEmailPassword,
        logIn,
        googleLogIn,
        logOut,
        user,
        isLoading,
        updateProfileUpdate
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;