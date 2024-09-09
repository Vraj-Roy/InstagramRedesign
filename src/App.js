import React, { useEffect, useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Middle from "./components/Middle";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Explore from "./components/options/Explore";
import Saved from "./components/options/Saved";
import Bottom from "./components/Bottom";
import Reels from "./components/options/Reels";
import Activity from "./components/options/Activity";
import Settings from "./components/options/Settings";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const location = useLocation(); // Now useLocation is within the Router context

  useEffect(() => {
    // Function to run on route change
    setProgress(30);
    setTimeout(() => {
      setProgress(100); // Simulates loading progress on route change
    }, 100);
  }, [location]); // Re-run when location changes

  return (
    <>
      <LoadingBar
        height={3}
        style={{
          backgroundImage:
            "linear-gradient(to right, #7e22ce, #b91c1c, #b91c1c,#facc15)", // Replace with your desired gradient colors
        }}
        shadow
        transitionTime={300}
        // loaderSpeed={1500}
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="flex">
        <Left />
        <div className="h-full w-[20vw] hidden md:block"></div>
        <Routes>
          <Route path="/" element={<Middle />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Bottom />
      </div>
      <div className="mt-14"></div>
    </>
  );
}

// Wrapping App component with BrowserRouter
export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
