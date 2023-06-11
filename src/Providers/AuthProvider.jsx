import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
// import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    
    
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);


    const newUser = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userLogOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token....

            // if(currentUser){
            // axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            // .then(data => {
            //     console.log(data.data.token);
            //     localStorage.setItem('access-token', data.data.token)
            // })

            // }







            setLoading(false);
        });

        return () =>{
           return unsubscribe();
        }

    }, [])

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)


    }




    const profileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL

        })

    }

    const authenticationData = {
        user,
        loading,
        newUser,
        userLogIn,
        userLogOut,
        googleSignIn,
        profileUpdate
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