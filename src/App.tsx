import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <span role="img">🔊</span> Push the tempo
          </h1>
        </header>
        <main>
          <Route path="/" exact>
            <LeaderBoardScreen />
          </Route>
          <Route path="/game">
            <GameScreen onGameOver={gameOverHandler}></GameScreen>
          </Route>
          <Route path="/score">
            <ScoreScreen score={score} />
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
