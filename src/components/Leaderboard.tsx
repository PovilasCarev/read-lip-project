import React, { useState } from "react";
import HomeButton from "./HomeButton";
import DurationButtons from "./DurationButtons";

type LeaderboardItem = {
  name: string;
  score: number;
};

const Leaderboard: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState(0); // Initial selected duration (All-Time)
  const handleDurationChange = (duration: number) => {
    setSelectedDuration(duration);
    console.log(`Selected duration: ${duration}`);
  };

  // Data arrays for each duration
  const sevenDayData = [
    { name: "John", score: 85 },
    { name: "Alice", score: 78 },
    { name: "Bob", score: 72 },
  ];

  const thirtyDayData = [
    { name: "Emily", score: 92 },
    { name: "David", score: 89 },
    { name: "Charles", score: 80 },
  ];

  const allTimeData = [
    { name: "Josh", score: 100 },
    { name: "Paul", score: 90 },
    { name: "Ken", score: 80 },
  ];

  return (
    <div className="container d-flex justify-content-center text-center mt-3">
      <div>
        <h1>Leaderboard</h1>
        <DurationButtons
          onDurationChange={handleDurationChange}
          selectedDuration={selectedDuration}
        />
        <div className="leaderboard mt-4">
          <ul className="list-group">
            {selectedDuration === 7
              ? sevenDayData.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: 18, color: "red" }}>
                      {index + 1}.
                    </span>{" "}
                    {item.name}. {item.score} points
                  </li>
                ))
              : selectedDuration === 30
              ? thirtyDayData.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: 18, color: "red" }}>
                      {index + 1}.
                    </span>{" "}
                    {item.name}. {item.score} points
                  </li>
                ))
              : allTimeData.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: 18, color: "red" }}>
                      {index + 1}.
                    </span>{" "}
                    {item.name}. {item.score} points
                  </li>
                ))}
          </ul>
          <HomeButton />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
