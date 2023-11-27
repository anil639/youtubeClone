import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
