import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "./Button";
import LCD from "./Lcd";
import { GameScreen } from "./GameScreen";

interface Score {
  id: number;
  name: string;
  score: number;
}

const SCORES: Score[] = [
  {
    id: 1,
    name: "tomas",
    score: 13
  },
  {
    id: 2,
    name: "sanne",
    score: 156
  },
  {
    id: 3,
    name: "tomas",
    score: 17
  },
  {
    id: 4,
    name: "tomas",
    score: 40
  },
  {
    id: 5,
    name: "piet",
    score: 17
  }
];

const LeaderBoardScreen: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeOutId = setTimeout(() => {
      setLoading(false);
      setScores(SCORES.sort((a, b) => b.score - a.score));
    }, 2000);

    return () => {
      clearTimeout(timeOutId);
      setLoading(false);
    };
  }, []);

  return (
    <React.Fragment>
      <LCD>
        <ol className="leaderbord-list">
          {loading ? "Loading scores..." : ""}
          {scores.map(s => (
            <li key={s.id}>
              {s.name}
              <span className="score">{s.score}</span>
            </li>
          ))}
        </ol>
      </LCD>
      <Link to="game">
        <Button>&#9654;</Button>
      </Link>
    </React.Fragment>
  );
};

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

const ScoreScreen: React.FC = () => {
  return <p>hi</p>;
};

function App() {
  return (
    <Router basename="/push-the-tempo">
      <div className="app">
        <header>
          <h1>
            <span role="img">🔊</span> push the tempo
          </h1>
        </header>
        <main>
          <Route path="/" exact>
            <LeaderBoardScreen />
          </Route>
          <Route path="/game">
            <Link to="/">
              <button>back</button>
            </Link>
            <GameScreen></GameScreen>
          </Route>
          <Route path="/score">
            <ScoreScreen />
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
