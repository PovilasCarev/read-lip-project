import GifComponent from "./components/GifComponent";
import InputField from "./components/InputField";
import "./App.css";
import { Link } from "react-router-dom";
import LeaderboardButton from "./components/LeaderboardButton";

function App() {
  return (
    <div className="app-container">
      {" "}
      <GifComponent />
      <InputField />
      <LeaderboardButton />
    </div>
  );
}

export default App;
