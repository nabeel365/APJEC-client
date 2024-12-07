// import React, { createContext, useEffect, useState } from 'react';

// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import app from '../../firebase.config';
// // import axios from 'axios';

// export const AuthContext = createContext(null);

// const auth = getAuth(app)

// const googleProvider = new GoogleAuthProvider()

// const AuthProvider = ({ children }) => {


    
    
//     const [user, setUser] = useState(null);
    
//     const [loading, setLoading] = useState(true);


//     const newUser = async(email, password) =>{
//         try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
//             method:'POST', 
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({email})
//         })
// console.log(response);
// return userCredential;
//         } catch (error) {
//             console.log(error);
            
//         }
//     }

//     const userLogIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     }


//     const userLogOut = () =>{
//         return signOut(auth);
//     }

//     useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);

//             // get and set token....

//             // if(currentUser){
//             // axios.post('${import.meta.env.VITE_BACKEND_URL}/jwt', {email: currentUser.email})
//             // .then(data => {
//             //     console.log(data.data.token);
//             //     localStorage.setItem('access-token', data.data.token)
//             // })

//             // }







//             setLoading(false);
//         });

//         return () =>{
//            return unsubscribe();
//         }

//     }, [])

//     const googleSignIn = async() => {

//         try {            
//             const userCredential = await signInWithPopup(auth, googleProvider);
                
//             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
//                 method:'POST', 
//                 headers:{
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify({email:userCredential.user.email})
//             })
//             localStorage.setItem("email", userCredential.user.email);
//             return userCredential;
//             } catch (error) {
//                 console.log(error);
                
//             }


//     }




//     const profileUpdate = (name, photoURL) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name,
//             photoURL: photoURL

//         })

//     }

//     const authenticationData = {
//         user,
//         loading,
//         newUser,
//         userLogIn,
//         userLogOut,
//         googleSignIn,
//         profileUpdate
//     }

//     return (
//         <div>
//             <AuthContext.Provider value={authenticationData}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     );
// };

// export default AuthProvider;


import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user
  const newUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Save user email to the database
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("User saved to database:", response);
      // Save email to localStorage
      localStorage.setItem("email", email);

      return userCredential;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  // Log in user
  const userLogIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Save email to localStorage
      localStorage.setItem("email", email);

      return userCredential;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  };

  // Log out user
  const userLogOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("email"); // Clear email from localStorage
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  // Google Sign-In
  const googleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);

      // Save user email to the database
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userCredential.user.email }),
      });

      console.log("User saved to database:", response);
      // Save email to localStorage
      localStorage.setItem("email", userCredential.user.email);

      return userCredential;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  };

  // Update profile
  const profileUpdate = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // Automatically log in the user from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("email", currentUser.email);
      } else if (savedEmail) {
        // Fallback: Create a mock user object with the email from localStorage
        setUser({ email: savedEmail });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authenticationData = {
    user,
    loading,
    newUser,
    userLogIn,
    userLogOut,
    googleSignIn,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authenticationData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
