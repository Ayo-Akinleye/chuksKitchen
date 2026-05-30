// Auth.js contains all firebase functions
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  updateProfile,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase";

// SIGN UP:  with email & password
export const signUpWithEmail = async (email, password, phone, fullname) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save name to Firebase Auth profile
  await updateProfile(user, {
    displayName: fullname,
    photoURL: `https://api.dicebear.com/10.x/initials/svg?seed=${fullname}`
  })

  // send verfication email
  await sendEmailVerification(user);

  // Save extra info to Firestore 
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    phone: phone,
    fullname: fullname,
    photoURL: `https://api.dicebear.com/10.x/initials/svg?seed=${fullname}`,
    createdAt: new Date()
  });

  return user;
};

// SIGN IN with email & password
export const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Fix broken photoURL for existing users
  if (!user.photoURL || user.photoURL.includes("7.x")) {
    await updateProfile(user, {
      photoURL: `https://api.dicebear.com/10.x/initials/svg?seed=${user.displayName || user.email}`
    });
  }

  return user;
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