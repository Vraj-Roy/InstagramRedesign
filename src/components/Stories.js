import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const Stories = () => {
  return (
    <>
      <div className="flex text-zinc-100 justify-between p-5 text-lg font-bold">
        <div className="text-white ">Stories</div>
        <div className="text-white text-sm ">
          {" "}
          <PlayCircleFilledWhiteOutlinedIcon className="mb-1 w-5 h-5 " /> Watch
          all
        </div>
      </div>
      <div className="flex space-x-3 overflow-x-auto p-3 bg-black">
        {/* Story Item */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            {/* Story Image or Icon */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfz4nzlwpSkut_9By_fl-SskFrZyfhDZIRA&s"
              alt="Your story"
              className="w-full h-full object-cover"
            />
            {/* Optionally add an icon or a plus button for adding a new story */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button className="text-white text-xl">+</button>
            </div>
          </div>
          <span className="mt-1 text-white text-xs">Your story</span>
        </div>

        {/* Repeat the Story Item component for other stories */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp1"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Kristian Patel</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp2"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Amelia Townsend</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp3"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs"> Franklin</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp4"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Koa Vega</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp5"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Claudia</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp6"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Louie Ramos</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp7"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Emily Smith</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp8"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Braelynn Medrano</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp9"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Zakai Travis</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp10"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Kyng Rice</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp11"
              alt="User story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Sana</span>
        </div>

        {/* More story items... */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 border-2 border-gradient-to-r from-purple-400 to-red-400 overflow-hidden">
            <img
              src="/stp12"
              alt="Another story"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-1 text-white text-xs">Selena Guerrero</span>
        </div>

        {/* Add more stories as needed */}
      </div>
    </>
  );
};
export default Stories;
