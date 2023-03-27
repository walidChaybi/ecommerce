import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./signin.scss";
import Button from "../../components/button/Button";
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
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div>
      <div className="group">
        <h2>
          Already have an account
          <Link to="/signup">
            <span>New user?</span>
          </Link>
        </h2>
        <form onSubmit={signinHandler}>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="signin-button-container">
            <Button type="submit">Sign In</Button>
            <Button onClick={logGoogleUser} buttonType={"google"}>
              <FontAwesomeIcon color="white" icon={faG} />
              <span>Sign in with Google</span>
            </Button>
          </div>
          <span>{error && "Something went wrong!"}</span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
