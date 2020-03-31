import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { timer, Observable } from "rxjs";
import { mapTo, tap } from "rxjs/operators";
import { Button } from "./Button";
import LCD from "./Lcd";

interface Score {
  id: number;
  name: string;
  score: number;
}

const LS_KEY = "push-the-tempo-scores";

const DEFAULT_SCORES: Score[] = [
  {
    id: 1,
    name: "tomas",
    score: 20
  },
  {
    id: 2,
    name: "sanne",
    score: 150
  },
  {
    id: 3,
    name: "tomas",
    score: 30
  },
  {
    id: 4,
    name: "tomas",
    score: 40
  },
  {
    id: 5,
    name: "piet",
    score: 85
  }
];

function getScoresAsync(): Observable<Score[]> {
  const scoresList = getScoresFromLocalstorage();

  // Fake delay...
  return timer(2000).pipe(mapTo(scoresList));
}

/**
 * Get scores from localstorage or default scores.
 */
function getScoresFromLocalstorage(): Score[] {
  let scoresList: Score[] = JSON.parse(localStorage.getItem(LS_KEY) || "[]");

  if (scoresList.length === 0) {
    // fill once with some default scores.
    localStorage.setItem(LS_KEY, JSON.stringify(DEFAULT_SCORES));
    scoresList = DEFAULT_SCORES;
  }

  return scoresList;
}

export function saveScore({ name, score }: Pick<Score, "name" | "score">) {
  const scoreList = getScoresFromLocalstorage();
  const highestId = scoreList.reduce((prev, cur) => {
    return prev.id > cur.id ? prev : cur;
  }).id;

  const newScoreItem: Score = { id: highestId + 1, name, score };

  localStorage.setItem(LS_KEY, JSON.stringify([...scoreList, newScoreItem]));
}

export const LeaderBoardScreen: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(false);

  function loadScores() {
    setLoading(true);

    return getScoresAsync().pipe(
      tap((scores: Score[]) => {
        setScores(scores.sort((a, b) => b.score - a.score));
        setLoading(false);
      })
    );
  }

  useEffect(() => {
    const subscription = loadScores().subscribe();

    return () => {
      // When component unmounts before async operation is done, unsubscribe to cancel.
      // Rxjs <3
      subscription.unsubscribe();
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
        <Button pumpIt={600}>&#9654;</Button>
      </Link>
    </React.Fragment>
  );
};
