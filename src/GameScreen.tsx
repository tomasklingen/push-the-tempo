import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { BpmButton, Button } from "./Button";
import { SmallLCD } from "./Lcd";

interface GameScreenProps {
  onGameOver: (score: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onGameOver }) => {
  const randomBpm = () => Math.floor(Math.random() * 100 + 80);
  const [bpmTarget, setBpmTarget] = useState(0);
  const [playerBpm, setPlayerBpm] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const start = () => {
    setTimeLeft(5);
    setIsRunning(true);
  };

  useEffect(() => {
    setBpmTarget(randomBpm());
  }, []);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (timeLeft > 1) {
        setTimeLeft(time => time - 1);
      } else {
        onGameOver(score);
        setIsFinished(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isRunning, timeLeft]);

  /**
   * Calculate points for bpm accuracy. 10 for exact bpm hit, 5 for a close hit, otherwise 0.
   * @param bpm
   * @param bpmTarget
   */
  const calculateScore = (bpm: number, bpmTarget: number) => {
    const diff = Math.abs(bpm - bpmTarget);
    return diff ? (diff < 10 ? 5 : 0) : 10;
  };

  const bpmHandler = (bpm: number) => {
    setPlayerBpm(bpm);
    setScore(curScore => curScore + calculateScore(bpm, bpmTarget));
  };

  return (
    <div>
      <h2>
        Bpm Target
        <SmallLCD style={{ float: "right" }} value={bpmTarget}></SmallLCD>
      </h2>
      <h2>
        Your BPM
        <SmallLCD style={{ float: "right" }} value={playerBpm}></SmallLCD>
      </h2>
      <h2>
        Score
        <SmallLCD style={{ float: "right" }} value={score}></SmallLCD>
      </h2>
      <h2>
        Time left
        <SmallLCD style={{ float: "right" }} value={timeLeft}></SmallLCD>
      </h2>

      {isRunning ? (
        <BpmButton onBpm={bpmHandler}>Hit</BpmButton>
      ) : (
        <Button onClick={start}>&#9654; Start</Button>
      )}
      {isFinished ? <Redirect to="score" push={true}></Redirect> : ""}
    </div>
  );
};
