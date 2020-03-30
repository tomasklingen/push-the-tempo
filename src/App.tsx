import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GameScreen } from "./GameScreen";
import { LeaderBoardScreen } from "./LeaderBoardScreen";

const ScoreScreen: React.FC = () => {
  return <p>hi</p>;
};

function App() {
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
