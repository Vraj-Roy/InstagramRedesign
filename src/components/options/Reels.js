import NavBar from "../NavBar";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import GridOnIcon from "@mui/icons-material/GridOn";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import { motion } from "framer-motion";

import { useState } from "react";
const Reels = () => {
  const [f, setF] = useState("Follow");
  const followButton = () => {
    if (f === "Follow") {
      setF("Unfollow");
    } else {
      setF("Follow");
    }
  };
  return (
    <>
      <div className="w-full md:w-[80%] bg-black">
        <NavBar />
        <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5  font-bold">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-xl"
          >
            Reels
          </motion.div>
          <div className="flex text-zinc-200 text-sm  gap-x-5">
            <div className="hover:cursor-pointer  flex flex-col items-center ">
              <div>
                <GridOnIcon />
              </div>
              <div className="-mt-5 text-3xl">.</div>
            </div>
            <div className="text-zinc-400 hover:cursor-pointer">
              <PlayLessonIcon />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:grid grid-cols-2 gap-x-10 mb-6 md:w-[69vw] mx-4 md:m-auto"
        >
          <div className="rounded-2xl w-full  overflow-hidden     border-zinc-600  ">
            <img className="w-full h-full rounded-md" src="/Reels.jpg" />{" "}
          </div>
          <div className="rounded-2xl bg-zinc-900 p-5 sm:p-10  w-full mt-4 sm:mt-0 ">
            <div className="border-b-2 border-zinc-600 pb-5">
              <div className="flex items-center gap-x-3  ">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full overflow-hidden">
                  {" "}
                  <img
                    src="/feed3"
                    className="w-full h-full object-cover"
                  />{" "}
                </div>
                <div className="text-sm md:text-lg font-bold mr-2">
                  Black123
                </div>
                <div>
                  {" "}
                  <button
                    onClick={followButton}
                    className={
                      f === "Follow"
                        ? "text-black bg-white font-bold border-2 text-xs md:text-lg  border-white blue-700 rounded-lg px-2 py-1 "
                        : "text-zinc-200 bg-zinc-900 font-bold border-2 text-xs md:text-lg  border-zinc-200 blue-700 rounded-lg px-2 py-1 "
                    }
                  >
                    {f}
                  </button>
                </div>
              </div>
              <div className=" m-1  text-[16px] ">Turn on Notifications</div>
              <div className="m-1 flex text-sky-200 flex-wrap  gap-2 text-[14px]">
                <div className="">#cool</div>
                <div className="">#cool</div>
                <div className="">#beauty</div>
                <div className="">#beauty</div>
                <div className="">#next</div>
                <div className="">#next</div>
                <div className="">#cool</div>
                <div className="">#cool</div>
                <div className="">#beauty</div>
                <div className="">#beauty</div>
                <div className="">#next</div>
                <div className="">#next</div>
              </div>
            </div>

            <div>
              <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500  ">
                <div className=" w-10 h-10   md:w-14 md:h-14 rounded-full overflow-hidden object-cover">
                  {" "}
                  <img
                    src="/selfie.jpg"
                    className="border-2 w-full h-full object-cover"
                  />{" "}
                </div>
                <div className=" mt-1 ml-1 text-[14px] ">
                  newjdsaldsa123
                  <div className="inline text-sky-200">
                    {" "}
                    @Black123 <div className="text-zinc-100">Nice Pic...❤</div>
                    <br />
                    <div className="inline text-zinc-300  mr-2"> 15h</div>
                    <div className="inline text-zinc-300  mr-2"> 1 like</div>
                    <div className="inline text-zinc-300  mr-2"> reply</div>
                  </div>
                  <div className="text-zinc-300">---- View Replies</div>
                </div>

                <div className="flex  "></div>
              </div>
              <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500 ">
                <div className="  w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden object-cover">
                  {" "}
                  <img
                    src="/selfie.jpg"
                    className="border-2 w-full h-full object-cover"
                  />{" "}
                </div>
                <div className=" mt-1 ml-1 text-[14px] ">
                  newjdsaldsa123
                  <div className="inline text-sky-200">
                    {" "}
                    @Black123 <div className="text-zinc-100">😊😊😊</div>
                    <br />
                    <div className="inline text-zinc-300  mr-2"> 15h</div>
                    <div className="inline text-zinc-300  mr-2"> 1 like</div>
                    <div className="inline text-zinc-300  mr-2"> reply</div>
                  </div>
                  <div className="text-zinc-300">---- View Replies</div>
                </div>

                <div className="flex  "></div>
              </div>
              <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500 ">
                <div className="  w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden object-cover">
                  {" "}
                  <img
                    src="/selfie.jpg"
                    className="border-2 w-full h-full object-cover"
                  />{" "}
                </div>
                <div className=" mt-1 ml-1 text-[14px] ">
                  newjdsaldsa123
                  <div className="inline text-sky-200">
                    {" "}
                    @Black123{" "}
                    <div className="text-zinc-100">Beautifull Horse</div>
                    <br />
                    <div className="inline text-zinc-300  mr-2"> 15h</div>
                    <div className="inline text-zinc-300  mr-2"> 1 like</div>
                    <div className="inline text-zinc-300  mr-2"> reply</div>
                  </div>
                  <div className="text-zinc-300">---- View Replies</div>
                </div>

                <div className="flex  "></div>
              </div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Reels;
