import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/Favorite";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"; 
import { useLocation } from "react-router-dom";

const Bottom = () => {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <>
      <div className="fixed md:hidden ">
      <div className="  h-14 fixed bg-black w-full rounded-lg bottom-0 flex justify-around items-center">
            <Link to="/">
              {location.pathname === "/" ? (
                <div className=" font-semibold flex gap-x-4 items-center  text-3xl">
                  <div>
                    <HomeIcon />
                  </div>{" "} 
                </div>
              ) : (
                <div className="  font-semibold   text-zinc-200 flex gap-x-4 items-center  text-lg">
                  <div>
                    <HomeIcon />
                  </div>{" "} 
                </div>
              )}
            </Link>
            <Link to="/explore">
              {location.pathname === "/explore" ? (
                <div className="  font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <ExploreOutlinedIcon />
                  </div>{" "} 
                </div>
              ) : (
                <div className="  font-semibold   text-zinc-200 flex gap-x-4 items-center  text-lg">
                  <div>
                    <ExploreOutlinedIcon />
                  </div>{" "} 
                </div>
              )}
            </Link>

            
            <Link to="/reels">
              {location.pathname === "/reels" ? (
                <div className="  font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <InstallMobileIcon />
                  </div>{" "} 
                </div>
              ) : (
                <div className="  font-semibold   text-zinc-200 flex gap-x-4 items-center  text-lg">
                  <div>
                    <InstallMobileIcon />
                  </div>{" "} 
                </div>
              )}
            </Link>
            <Link to="/saved">
              {location.pathname === "/saved" ? (
                <div className="  font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <BookmarkBorderOutlinedIcon />
                  </div>{" "} 
                </div>
              ) : (
                <div className="  font-semibold   text-zinc-200 flex gap-x-4 items-center  text-lg">
                  <div>
                    <BookmarkBorderOutlinedIcon />
                  </div>{" "} 
                </div>
              )}
            </Link>
            <Link to="/settings">
              {location.pathname === "/settings" ? (
                <div className="  font-semibold flex gap-x-4 items-center  text-lg">
                  <div>
                    <SettingsOutlinedIcon />
                  </div>{" "} 
                </div>
              ) : (
                <div className="  font-semibold   text-zinc-200 flex gap-x-4 items-center  text-lg">
                  <div>
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
