import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Feed from "./Components/Feed/Feed";
import VideoDetails from "./Components/VideoFile/VideoDetails";
import ChannelDetails from "./Components/ChannelFile/ChannelDetails";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
