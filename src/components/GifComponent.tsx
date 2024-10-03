import React from "react";
import Gif from "../images/Empty.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GifComponent.css"; // Import your CSS file

const GifComponent: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="mb-4">The Shining (1980)</h1>
          <img
            src={Gif}
            alt="A cool gif"
            className="gif-image shadow-lg rounded" // Apply the class here
          />
        </div>
      </div>
    </div>
  );
};

export default GifComponent;
