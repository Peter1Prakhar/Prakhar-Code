"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
