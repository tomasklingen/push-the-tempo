import React, { CSSProperties } from "react";
import "./Lcd.css";

interface SmallLCDProps {
  value: number | string;
  style?: CSSProperties;
}

export const SmallLCD: React.FC<SmallLCDProps> = props => {
  const formatText = (value: number | string) => {
    const paddedValue = value.toString().padStart(3, "0");
    return paddedValue.length > 3 ? "999" : paddedValue;
  };

  return (
    <LCD
      {...props}
      style={{
        ...props.style,
        display: "inline",
        margin: 0,
        height: "initial",
        padding: "10px"
      }}
    >
      {formatText(props.value)}
    </LCD>
  );
};

const LCD: React.FC<any> = props => {
  return (
    <div className="lcd" {...props}>
      {props.children}
    </div>
  );
};

export default LCD;
