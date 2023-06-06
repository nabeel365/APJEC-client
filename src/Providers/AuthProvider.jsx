import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import app from '../FireBase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    
    
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);


    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userLogOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token....

            if(currentUser){
            axios.post('http://localhost:1000/jwt', {email: currentUser.email})
            .then(data => {
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
            })

            }







            setLoading(false);
        });

        return () =>{
           return unsubscribe();
        }

    }, [])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    }




    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL

        })

    }

    const authenticationData = {
        user,
        loading,
        createNewUser,
        userSignIn,
        userLogOut,
        signInWithGoogle,
        userProfileUpdate
    }

    return (
        <div>
            <AuthContext.Provider value={authenticationData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;