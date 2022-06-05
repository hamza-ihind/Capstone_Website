import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJRfn3hXGsypaF25n8e3JSS_6Zx2q765g",
  authDomain: "capstone-40f9c.firebaseapp.com",
  projectId: "capstone-40f9c",
  storageBucket: "capstone-40f9c.appspot.com",
  messagingSenderId: "152221695582",
  appId: "1:152221695582:web:1d63b55b9073f91fd8becf",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
