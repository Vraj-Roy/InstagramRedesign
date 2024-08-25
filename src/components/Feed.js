import { useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
const Feed = () => {
  // let cc="flex"
  const [cc, setCC] = useState("flex");
  const [cc2, setCC2] = useState("hidden");
  const popular = () => {
    setCC("hidden");
    setCC2("flex");
  };
  const latest = () => {
    setCC("flex");
    setCC2("hidden");
  };
  return (
    <>
      <div className="flex text-zinc-100 justify-between  pt-4 pb-3 px-5 text-xl font-bold">
        <div className="text-white">Feed</div>
        <div className="flex text-zinc-200 text-sm  gap-x-5">
          <div
            className={
              "hover:cursor-pointer  flex flex-col items-center select-none"
            }
          >
            <div
              onClick={latest}
              className={
                " hover:cursor-pointer  " +
                (cc === "flex" ? "text-white" : "text-zinc-400")
              }
            >
              Latest
            </div>
            {cc === "flex" && <div className="-mt-5 text-3xl">.</div>}
          </div>
          <div className="hover:cursor-pointer  flex flex-col items-center select-none   ">
            <div
              onClick={popular}
              className={
                " hover:cursor-pointer  " +
                (cc2 === "flex" ? "text-white" : "text-zinc-400")
              }
            >
              Popular
            </div>
            {cc2 === "flex" && <div className="-mt-5 text-3xl">.</div>}
          </div>
        </div>
      </div>
      <motion.div
        className={`  flex-wrap  md:justify-between sm:justify-around px-5 gap-y-5 w-fit md:gap-y-12 m-auto ${cc} `}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div class="bg-black-100    w-full  md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" alt="" src="/feed2" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  8fact
                </span>
                <span class="text-gray-200 text-xs block">
                  Asheville, North Carolina
                </span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed6.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              12,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              What a Beautifull view...
            </div>
          </div>
        </div>
        <div class="bg-black-100    w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/feed1" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  corporates_new
                </span>
                <span class="text-gray-200 text-xs block">New York, USA</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed5.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              2,322 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Building a great team together
            </div>
          </div>
        </div>{" "}
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/feed2" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  camera_jason
                </span>
                <span class="text-gray-200 text-xs block">Toranto, Canada</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed2" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              2,123,200 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Capturing Beauty
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/feed2" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  rish
                </span>
                <span class="text-gray-200 text-xs block">
                  Ahemdabad, gujarat
                </span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed7.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              99,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Statue of Unity
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/feed1" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  bihar_boy
                </span>
                <span class="text-gray-200 text-xs block">Bihar, India</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed_building.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              46,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Developing at 200%
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] md:mb-0 mb-8">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/feed2" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  student_er
                </span>
                <span class="text-gray-200 text-xs block">
                  Stanford, California
                </span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feed3" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              890 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Graduation Day
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feed Popular */}

      <motion.div
        className={`  flex-wrap  md:justify-between sm:justify-around px-5 gap-y-5 w-fit md:gap-y-12 m-auto ${cc2} `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div class="bg-black-100    w-full  md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" alt="" src="/sa7.png" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  lukeshaw
                </span>
                <span class="text-gray-200 text-xs block">Paris, France</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feedp1.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              786,612,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Sunny Day, Beautifull People
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/stp6" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  couple_goals
                </span>
                <span class="text-gray-200 text-xs block">New York, USA</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feedp5.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              590,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Beautifull Vibes
            </div>
          </div>
        </div>{" "}
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/stp4" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  collegeattotanto
                </span>
                <span class="text-gray-200 text-xs block">Toranto, Canada</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feedp3.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              4,12,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Bulding a great future
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/sa9.png" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  catchme
                </span>
                <span class="text-gray-200 text-xs block">Moscow, Russia</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feedp7.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              88,12,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Showing off my photography skills
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] ">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/sa1.png" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  dreamer
                </span>
                <span class="text-gray-200 text-xs block">
                  Glassglow, Scotland
                </span>
              </div>
            </div>
            <img className="rounded-2xl" src="feedp4.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              50,120,372 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Trying to touch the grass
            </div>
          </div>
        </div>
        <div class="bg-black-100   body w-full md:w-[380px] md:mb-0 mb-8">
          <div class="bg-zinc-900 border-zinc-600 px-2 rounded-2xl m-auto md-0 overflow-hidden  max-w-md">
            <div class="flex items-center px-4 py-3">
              <img class="h-8 w-8 rounded-full" src="/sa2.png" />
              <div class="ml-3 ">
                <span class="text-sm text-gray-200  font-semibold antialiased block leading-tight">
                  usual_ally
                </span>
                <span class="text-gray-200 text-xs block">London, UK</span>
              </div>
            </div>
            <img className="rounded-2xl" src="/feedp9.png" />
            <div class="flex items-center justify-between mx-4 mt-3 mb-2">
              <div class="flex gap-5 ">
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
                <svg fill="grey" height="24" viewBox="0 0 48 48" width="18">
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    stroke="white"
                    stroke-width="3"
                  ></path>
                </svg>
                <ShareOutlinedIcon />
              </div>
              <div class="flex">
                <BookmarkBorderOutlinedIcon />
              </div>
            </div>
            <div class="font-semibold text-zinc-100 text-sm mx-4 mt-2 mb-1">
              12,351,123 likes
            </div>
            <div class="text-zinc-100 text-sm mx-4 mt-1 mb-4 ">
              Working from Home is no joke
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Feed;
