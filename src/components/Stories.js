import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { motion } from "framer-motion";

const Stories = () => {
  return (
    <>
      <div className="flex  text-zinc-100 justify-between py-3  px-5 text-lg font-bold">
        <div className="text-white text-xl ">Stories</div>
        <div className="text-white text-sm ">
          {" "}
          <PlayCircleFilledWhiteOutlinedIcon className="mb-1 w-5 h-5 " /> Watch
          all
        </div>
      </div>
      <motion.div
        className="flex space-x-3 story-main overflow-x-auto   px-3 bg-black"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Story Item */}
        <div className="flex flex-col items-center ">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full   bg-white  overflow-hidden"
          >
            {/* Story Image or Icon */}
            <img
              src="/p1.png"
              alt="Your story"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Optionally add an icon or a plus button for adding a new story */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button className="text-zinc-400 text-xl">+</button>
            </div>
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Your story
          </span>
        </div>

        {/* Repeat the Story Item component for other stories */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200   bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400 overflow-hidden"
          >
            <img
              src="/stp1.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Kristian Patel
          </span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center ">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp2.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Amelia Townsend
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp3.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center"> Franklin</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp4.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">Koa Vega</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp5.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">Claudia</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp6.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Louie Ramos
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp7.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Emily Smith
          </span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp8.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Braelynn Medrano
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp9.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Zakai Travis
          </span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp10.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">Kyng Rice</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp11.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">Sana</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div
            style={{ padding: "3px" }}
            className="relative w-20 h-20 rounded-full bg-gray-200  bg-gradient-to-bl from-purple-700 via-red-700 to-yellow-400  overflow-hidden"
          >
            <img
              src="/stp12.png"
              alt="Another story"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="mt-1 text-white text-xs text-center">
            Selena Guerrero
          </span>
        </div>

        {/* Add more stories as needed */}
      </motion.div>
    </>
  );
};
export default Stories;
