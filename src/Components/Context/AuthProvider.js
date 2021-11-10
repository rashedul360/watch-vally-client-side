import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthCOntext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthCOntext.Provider value={allContext}>{children}</AuthCOntext.Provider>
  );
};

export default AuthProvider;
