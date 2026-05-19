// Auth.js contains all firebase functions
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase";

// SIGN UP:  with email & password
export const signUpWithEmail = async (email, password, phone) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save extra info (phone number) to Firestore since Firebase Auth doesn't store it
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    phone: phone,
    createdAt: new Date()
  });

  return user;
};

// SIGN IN with email & password
export const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// SIGN IN with Google
export const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  const user = userCredential.user;

  // Save to Firestore if it's their first Google login
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    name: user.displayName,
    createdAt: new Date()
  }, { merge: true }); // merge: true means it won't overwrite existing data

  return user;
};

// SIGN OUT
export const logOut = async () => {
  await signOut(auth);
};