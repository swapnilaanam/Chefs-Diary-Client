import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, 
            photoURL: photo
        });
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, loggedUser => {
            // console.log(loggedUser);
            setUser(loggedUser);
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle, 
        signInWithGithub,
        updateUser,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;