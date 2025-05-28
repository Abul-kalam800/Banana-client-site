import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singinWithgoogle = (provaider) => {
    return signInWithPopup(auth, provaider);
  };

  const uptoProfile = (provaider) => {
    return updateProfile(auth.currentUser, provaider);
  };
  const userInfo = {
    creatUser,
    signinUser,
    singinWithgoogle,
    user,
    setUser,
    uptoProfile,
    loading,
  };

  useEffect(() => {
    const subcrib = onAuthStateChanged(auth, (currentUser) => {
     
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      subcrib();
    };
  }, []);
  return <AuthContex value={userInfo}>{children}</AuthContex>;
};

export default AuthProvider;
