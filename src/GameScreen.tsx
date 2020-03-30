import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "./Button";
import { SmallLCD } from "./Lcd";

interface BpmTrackerProps {
  onBpm: (bpm: number) => void;
  [otherProps: string]: any;
}

export const BpmTracker: React.FC<BpmTrackerProps> = props => {
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

  return <React.Fragment>{props.children}</React.Fragment>;
};

interface GameScreenProps {
  onGameOver: (score: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onGameOver }) => {
  const [bpmTarget] = useState(() => Math.floor(Math.random() * 100 + 80));
  const [playerBpm, setPlayerBpm] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timerID = setInterval(() => {
      setTimeLeft(time => time - 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft < 1) {
      onGameOver(score);
      setIsFinished(true);
    }
  }, [timeLeft, onGameOver, score]);

  const bpmInterval = (bpm: number) => (60 / bpm) * 1000;
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
      <div style={{ marginBottom: "20px" }}>
        <div className="cell">
          <h3>Bpm Target</h3>
          <SmallLCD value={bpmTarget}></SmallLCD>
        </div>
        <div className="cell">
          <h3>Your BPM</h3>
          <SmallLCD value={playerBpm}></SmallLCD>
        </div>
        <div className="cell">
          <h3>Score</h3>
          <SmallLCD value={score}></SmallLCD>
        </div>
        <div className="cell">
          <h3>Time left</h3>
          <SmallLCD value={timeLeft}></SmallLCD>
        </div>
      </div>

      {isRunning ? (
        <BpmTracker onBpm={bpmHandler}>
          <Button pumpIt={bpmInterval(bpmTarget)}>Hit</Button>
        </BpmTracker>
      ) : (
        <Button pumpIt={bpmInterval(bpmTarget)} onClick={start}>
          &#9654; <div style={{ fontSize: "0.5em" }}>Start</div>
        </Button>
      )}
      {isFinished ? <Redirect to="score" push={true}></Redirect> : ""}
    </div>
  );
};
