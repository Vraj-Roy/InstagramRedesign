import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/Favorite";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useLocation } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import InstallMobileOutlinedIcon from "@mui/icons-material/InstallMobileOutlined";
const Bottom = () => {
  const location = useLocation();
  return (
    <>
      <div className="fixed md:hidden ">
        <div className="  h-14 fixed bg-black w-full    bottom-0 flex justify-around items-center border-t-2 border-zinc-400">
          <Link to="/">
            {location.pathname === "/" ? (
              <div className=" font-semibold text-zinc-100 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <HomeIcon />
                </div>{" "}
              </div>
            ) : (
              <div className="  font-semibold   text-zinc-500 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <HomeOutlinedIcon />
                </div>{" "}
              </div>
            )}
          </Link>
          <Link to="/explore">
            {location.pathname === "/explore" ? (
              <div className="  font-semibold text-zinc-100 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <ExploreIcon />
                </div>{" "}
              </div>
            ) : (
              <div className="  font-semibold   text-zinc-500 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <ExploreOutlinedIcon />
                </div>{" "}
              </div>
            )}
          </Link>

          <Link to="/reels">
            {location.pathname === "/reels" ? (
              <div className="  font-semibold text-zinc-100 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <InstallMobileIcon />
                </div>{" "}
              </div>
            ) : (
              <div className="  font-semibold   text-zinc-500 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <InstallMobileOutlinedIcon />
                </div>{" "}
              </div>
            )}
          </Link>
          <Link to="/saved">
            {location.pathname === "/saved" ? (
              <div className="  font-semibold text-zinc-100 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <BookmarkOutlinedIcon />
                </div>{" "}
              </div>
            ) : (
              <div className="  font-semibold   text-zinc-500 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <BookmarkBorderOutlinedIcon />
                </div>{" "}
              </div>
            )}
          </Link>
          <Link to="/settings">
            {location.pathname === "/settings" ? (
              <div className="  font-semibold text-zinc-100 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <SettingsIcon />
                </div>{" "}
              </div>
            ) : (
              <div className="  font-semibold   text-zinc-500 flex gap-x-4 items-center  text-lg">
                <div className="scale-125">
                  <SettingsOutlinedIcon />
                </div>{" "}
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Bottom;
