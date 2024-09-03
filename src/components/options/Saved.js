import NavBar from "../NavBar";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import GridOnIcon from "@mui/icons-material/GridOn";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { motion } from "framer-motion";

const Saved = () => {
  return (
    <>
      <div className="w-full md:w-[80%] bg-black">
        <NavBar />
        <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-xl"
          >
            Saved
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
        >
          <div className="flex flex-wrap justify-center  gap-5 p-6 md:p-3">
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa1.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa3.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa4.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa5.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa7.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa2.png" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa9.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa6.png" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/s_a8.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa10.png" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa11.png" alt="" />{" "}
              <div className="absolute right-3 top-3 text-zinc-200">
                <AutoAwesomeMotionIcon />{" "}
              </div>
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden relative ">
              {" "}
              <img src="/sa12.png" alt="" />{" "}
            </div>
          </div>
          <div className="p-4 "></div>
        </motion.div>
      </div>
    </>
  );
};
export default Saved;
