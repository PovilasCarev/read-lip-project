import React from "react";
import { useNavigate } from "react-router-dom";
import homeIcon from "../images/home.png";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="position-absolute top-0 end-0 m-4">
      {" "}
      {/* Absolute positioning */}
      <button
        className="btn btn-link p-0"
        onClick={goToHomePage}
        style={{ cursor: "pointer" }}
      >
        <img
          src={homeIcon}
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

export default HomeButton;
