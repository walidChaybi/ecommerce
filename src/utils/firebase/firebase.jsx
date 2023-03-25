import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9l5ODKNH3ojb5PagBgoosfGdaC5Y0GhU",
  authDomain: "ecommerce-react-8529e.firebaseapp.com",
  projectId: "ecommerce-react-8529e",
  storageBucket: "ecommerce-react-8529e.appspot.com",
  messagingSenderId: "663985926088",
  appId: "1:663985926088:web:2b4c92e9460c04139adafd",
};

const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const CreateUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = { displayName: "walid" }
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log(userAuth.displayName);
  }
};
