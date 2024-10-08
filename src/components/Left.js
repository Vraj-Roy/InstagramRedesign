import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Left = () => {
  const location = useLocation();
  return (
    <>
      <div className=" hideen ">
        <div className="main no-scrollbar  overflow-y-scroll overflow-x-hidden h-full fixed top-0 left-0 md:block text-white bg-zinc-900 w-[20vw] px-4 py-4 border-r-2 border-zinc-700 hidden  ">
          <div>
            <Link to="/">
              <img src="instagram-text.png" alt=";;" />
            </Link>
          </div>
          <div
            style={{ padding: "3 px" }}
            className=" w-28 h-28 mb-5 m-auto rounded-full bg-zinc-300   overflow-hidden"
          >
            <img
              src="/p1.png"
              alt="User story"
              className="w-full h-full object-cover rounded-full "
            />
          </div>
          <div className="text-center">Alex</div>
          <div className="text-center">Social Media</div>
          <div className="bg-zinc-700 py-1 text-white px-5 my-1 hover:cursor-pointer rounded w-fit m-auto">
            Edit
          </div>
          <div className="flex text-md text-wrap font-semibold gap-x-4 m-auto mt-2 w-fit">
            <div className="text-center">98 Posts</div>
            <div className="text-center">35k followers</div>
            <div className="text-center">100 following</div>
          </div>
          <div className="m-3 border-y-2 border-gray-400">
            <Link to="/">
              {location.pathname === "/" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <HomeIcon />
                  </div>{" "}
                  <div>Home</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <HomeIcon />
                  </div>{" "}
                  <div>Home</div>
                </div>
              )}
            </Link>
            <Link to="/explore">
              {location.pathname === "/explore" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <ExploreOutlinedIcon />
                  </div>{" "}
                  <div>Explore</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <ExploreOutlinedIcon />
                  </div>{" "}
                  <div>Explore</div>
                </div>
              )}
            </Link>

            {/* <Link to="/activity">
              {location.pathname === "/activity" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <FavoriteIcon />
                  </div>{" "}
                  <div>Activity</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <FavoriteIcon />
                  </div>{" "}
                  <div>Activity</div>
                </div>
              )}
            </Link> */}
            <Link to="/reels">
              {location.pathname === "/reels" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <InstallMobileIcon />
                  </div>{" "}
                  <div>Reels</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <InstallMobileIcon />
                  </div>{" "}
                  <div>Reels</div>
                </div>
              )}
            </Link>
            <Link to="/saved">
              {location.pathname === "/saved" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <BookmarkBorderOutlinedIcon />
                  </div>{" "}
                  <div>Saved</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <BookmarkBorderOutlinedIcon />
                  </div>{" "}
                  <div>Saved</div>
                </div>
              )}
            </Link>
            <Link to="/settings">
              {location.pathname === "/settings" ? (
                <div className="my-5 font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <SettingsOutlinedIcon />
                  </div>{" "}
                  <div>Settings</div>
                </div>
              ) : (
                <div className="my-5 font-semibold  text-gray-400 flex gap-x-4 items-center  text-lg">
                  <div>
                    <SettingsOutlinedIcon />
                  </div>{" "}
                  <div>Settings</div>
                </div>
              )}
            </Link>
          </div>

          <div>
            <div className="my-5 hover:cursor-pointer mx-3 font-semibold flex gap-x-4 text-red-600 items-center  text-lg">
              <div>
                <LogoutOutlinedIcon />
              </div>{" "}
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
