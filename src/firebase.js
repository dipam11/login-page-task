import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react/cjs/react.production.min";

const firebaseConfig = {
  apiKey: "AIzaSyBpNVUEg-dcBiYVcP6OjYvoXmmmnf9z1d4",
  authDomain: "login-auth-8e3af.firebaseapp.com",
  projectId: "login-auth-8e3af",
  storageBucket: "login-auth-8e3af.appspot.com",
  messagingSenderId: "808794217567",
  appId: "1:808794217567:web:bfd05493ae7dcfee9f0fea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
