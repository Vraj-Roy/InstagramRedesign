import "./App.css";
import Left from "./components/Left";
import Middle from "./components/Middle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./components/options/Explore";
import Saved from "./components/options/Saved";
import Bottom from "./components/Bottom";
import Reels from "./components/options/Reels";
import Activity from "./components/options/Activity";
import Settings from "./components/options/Settings";
function App() {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <Left />
          <div className="h-full w-[20vw] hidden md:block"></div>
          <Routes>
            <Route path="/" element={<Middle />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/activity" element={<Activity />}></Route>
            <Route path="/reels" element={<Reels />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
          <Bottom />
        </BrowserRouter>
      </div>
      <div className="mt-14"></div>
    </>
  );
}

export default App;
