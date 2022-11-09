import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

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

    const authInfo = {
        createEmailPassword,
        logIn,
        googleLogIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;