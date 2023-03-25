import React, { useState } from "react";
import "./signUp.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { CreateUserDocumentFromAuth } from "../../utils/firebase/firebase";
import Button from "../../components/button/Button";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const auth = getAuth();

  // Signup with email and password, and creating a document in firestore database
  const signupHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        CreateUserDocumentFromAuth(user, { displayName });
        console.log(user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use")
          alert("Email already in use");
      });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <div className="group">
        <form onSubmit={signupHandler}>
          <input
            className="form-input"
            autoFocus
            id="name"
            required
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />

          <input
            className="form-input"
            id="email"
            required
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="form-input"
            id="password"
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="form-input"
            id="confirmPassword"
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <Button type="submit">Signup</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
