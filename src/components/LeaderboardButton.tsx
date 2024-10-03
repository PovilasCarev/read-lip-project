import React from "react";
import { useNavigate } from "react-router-dom";
import leaderboardIcon from "../images/leaderboard.png";

const LeaderboardButton: React.FC = () => {
  const navigate = useNavigate();

  const goToLeaderboard = () => {
    navigate("/leaderboard");
  };

  return (
    <div className="position-absolute top-0 end-0 m-4">
      {" "}
      {/* Absolute positioning */}
      <button
        className="btn btn-link p-0"
        onClick={goToLeaderboard}
        style={{ cursor: "pointer" }}
      >
        <img
          src={leaderboardIcon}
          alt="Leaderboard"
          style={{
            width: "45px",
            height: "45px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </button>
    </div>
  );
};

export default LeaderboardButton;
