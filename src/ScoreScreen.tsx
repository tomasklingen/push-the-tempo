import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SmallLCD } from "./Lcd";
import { saveScore } from "./LeaderBoardScreen";

interface ScoreScreenProps {
  score: number;
}

export const ScoreScreen: React.FC<ScoreScreenProps> = ({ score }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    saveScore({
      name,
      score
    });

    history.push("/");
  };

  return (
    <div>
      <p>
        <h2>Well done! Your score: </h2>
        <SmallLCD value={score}></SmallLCD>
      </p>
      <div>
        <h2>Enter your name to enter the hall of fame!</h2>
        <form onSubmit={submitHandler}>
          <div>
            <input
              style={{ padding: "5px", margin: "15px", fontSize: "16px" }}
              type="text"
              name="name"
              placeholder="your name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <Link to="/" style={{ color: "#fff", marginRight: "20px" }}>
              Try again
            </Link>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
