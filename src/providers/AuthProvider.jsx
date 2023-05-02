import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, 
            photoURL: photo
        });
    }

    const authInfo = {
        user,
        createUser,
        updateUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;