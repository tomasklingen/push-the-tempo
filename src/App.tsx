import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { GameScreen } from "./GameScreen";
import { LeaderBoardScreen } from "./LeaderBoardScreen";
import { ScoreScreen } from "./ScoreScreen";

function App() {
  const [score, setScore] = useState(0);

  const gameOverHandler = (score: number) => {
    setScore(score);
  };

  return (
    <Router basename="/push-the-tempo">
      <div className="app">
        <header>
          <h1>
            <span role="img">🔊</span> Push the tempo!
          </h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LeaderBoardScreen />} />
            <Route path="/game" element={<GameScreen onGameOver={gameOverHandler} />} />
            <Route path="/score" element={<ScoreScreen score={score} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
