import React from "react";

interface ScoreScreenProps {
  score: number;
}

export const ScoreScreen: React.FC<ScoreScreenProps> = ({ score }) => {
  return <p>hi, your score was: {score}</p>;
};
