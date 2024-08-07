import Left from "./Left";
import Middle from "./Middle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./options/Explore";
import Saved from "./options/Saved";

const Main = () => {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <Left />
          <div className="h-full w-[20vw] hidden md:block"></div>
          <Routes>
            <Route path="/" element={<Middle />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/activity" element={<Middle />}></Route>
            <Route path="/reels" element={<Middle />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="/settings" element={<Middle />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Main;
