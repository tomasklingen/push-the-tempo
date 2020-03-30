import React, { useEffect, useState } from "react";
import "./Button.css";

interface BpmButtonProps {
  onBpm: (bpm: number) => void;
}

export const BpmButton: React.FC<BpmButtonProps> = props => {
  const [lastUserBeat, setLastUserBeat] = useState<Date>(new Date());

  const addTap = (e: any) => {
    const now = new Date();
    if (lastUserBeat !== null) {
      const bpm = Math.round(60000 / (now.valueOf() - lastUserBeat.valueOf()));
      props.onBpm(bpm);
    }
    setLastUserBeat(now);
  };

  useEffect(() => {
    document.addEventListener("mousedown", addTap, false);
    document.addEventListener("keydown", addTap, false);

    return () => {
      document.removeEventListener("mousedown", addTap);
      document.removeEventListener("keydown", addTap);
    };
  });

  return <Button>{props.children}</Button>;
};

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <div className="button-container">
      <button className="shiny-button" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};
