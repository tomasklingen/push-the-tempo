import React, { useEffect, useState } from "react";
import { BpmButton, Button } from "./Button";
import { SmallLCD } from "./Lcd";

export const GameScreen: React.FC = () => {
  console.log("gamescreen rendered");
  const randomBpm = () => Math.floor(Math.random() * 100 + 80);
  const [bpmTarget, setBpmTarget] = useState(0);
  const [playerBpm, setPlayerBpm] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(6);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    console.log("Starting");
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
      console.log(`timeleft: ${timeLeft}`);
      if (timeLeft > 0) {
        setTimeLeft(time => time - 1);
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
    </div>
  );
};
