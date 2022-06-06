import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";

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

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};
