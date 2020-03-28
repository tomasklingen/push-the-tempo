import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button className="shiny-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
