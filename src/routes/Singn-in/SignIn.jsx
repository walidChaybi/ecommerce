import React, { useState } from "react";
import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./signin.scss";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = CreateUserDocumentFromAuth(user);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signupHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h1>Sign</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>

      <div className="signupContainer">
        <form onSubmit={signupHandler}>
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
        </form>
      </div>
    </div>
  );
}

export default SignIn;
