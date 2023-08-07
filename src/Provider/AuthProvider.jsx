import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null)
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
   }
   const logOut =()=>{
    setLoading(true);
    return signOut(auth)
 }
 const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

 
 useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        return unsubscribe();
    }

   
},[])  
   
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;