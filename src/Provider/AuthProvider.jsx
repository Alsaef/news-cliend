/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut   } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setloder]=useState(true)
    const createAccount=(email,password)=>{
               return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
              return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const noSubscription=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setloder(false)
        })
        return ()=>{
            return noSubscription;
        }
    },[])
    const info={
        username:'ratul',
        user,
        createAccount,
        loginUser,
        logOut,
        loader
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;