import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])
    //create email and password
    const createEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const logIn = (email, password) => {
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
        user
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;