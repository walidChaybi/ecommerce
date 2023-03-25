import React from "react";
import "./Button.scss";
const Button_type = {
  google: "google",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button ${Button_type[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
