import React from "react";

interface DurationButtonProps {
  onDurationChange: (duration: number) => void; // Function to handle button click
  selectedDuration: number; // Currently selected duration
}

const DurationButtons: React.FC<DurationButtonProps> = ({
  onDurationChange,
  selectedDuration,
}) => {
  return (
    <div className="duration mt-4">
      <button
        className={`btn mx-2 ${selectedDuration === 7 ? "active" : ""}`} // Add active class for selected button
        data-id="7"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
        onClick={() => onDurationChange(7)} // Pass duration on click
      >
        7 Days
      </button>
      <button
        className={`btn mx-2 ${selectedDuration === 30 ? "active" : ""}`} // Add active class for selected button
        data-id="30"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
        onClick={() => onDurationChange(30)} // Pass duration on click
      >
        30 Days
      </button>
      <button
        className={`btn mx-2 ${selectedDuration === 0 ? "active" : ""}`} // Add active class for selected button
        data-id="0"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
        onClick={() => onDurationChange(0)} // Pass duration on click
      >
        All-Time
      </button>
    </div>
  );
};

export default DurationButtons;
