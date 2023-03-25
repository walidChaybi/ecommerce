import React, { useState } from "react";
import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./signin.scss";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const auth = getAuth();

  //sign in with Google Popup, and creating a document in firestore database if doesn't exist
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = CreateUserDocumentFromAuth(user);
  };

  //signin Hanlder when submit,
  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div>
      <div className="signinContainer">
        <h1>Sign</h1>
        <button className="googleSignin" onClick={logGoogleUser}>
          Sign in with <span>Google</span>
        </button>
        <form onSubmit={signinHandler}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">SignIn</button>
          <span>{error && "Something went wrong!"}</span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
