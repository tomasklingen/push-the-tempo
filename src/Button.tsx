import "./Button.css";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;

  /**
   * Animation speed in ms.
   */
  pumpIt?: number;
}

export const Button: React.FC<ButtonProps> = props => {
  const { pumpIt, children, onClick } = props;

  return (
    <div className="big-round-button-container">
      <button
        className={"big-round-button shiny-button " + (pumpIt ? "pump-it" : "")}
        style={{ animationDuration: `${pumpIt}ms` }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
