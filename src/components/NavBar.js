import { TextField } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import IosShareIcon from "@mui/icons-material/IosShare";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
const NavBar = () => {
  return (
    <>
      <nav className="md:bg-zinc-900 bg-zinc-950  p-4   border-b-[2px] border-zinc-700">
        <div className="flex items-center justify-between">
          <div>
            <div className=" "></div>
            {/* <PlayCircleFilledWhiteOutlinedIcon/> */}
            <input
              type="text"
              className="py-2 px-4 w-60 rounded-lg bg-zinc-800 color-white hidden md:block "
              placeholder="Search"
            ></input>
            <div>
              <Link to="/" className="flex items-center md:hidden ">
                <div className="h-8   w-10">
                  <motion.img
                    src="favicon.png"
                    className="h-8   w-10"
                    alt=";;"
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-2xl ml-2 font-mono -tracking-wider font-semibold">
                  instagram
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-x-2 items-center  ">
            <div className="text-zinc-200 md:hidden block scale-125">
              <SearchOutlinedIcon />
            </div>
            <div className="md:block hidden text-zinc-200 scale-125">
              <IosShareIcon />
            </div>
            <div className="text-zinc-200 scale-125">
              <NotificationsNoneOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
