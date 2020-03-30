import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import LCD from "./Lcd";

interface Score {
  id: number;
  name: string;
  score: number;
}

function getScores(): Promise<Score[]> {
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

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(SCORES);
    }, 2000);
  });
}

export const LeaderBoardScreen: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadScores() {
    setLoading(true);

    const scores = await getScores();

    setScores(scores.sort((a, b) => b.score - a.score));
    setLoading(false);
  }

  useEffect(() => {
    loadScores();

    return () => {
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
