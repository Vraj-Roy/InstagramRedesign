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
        <div style={{"border-top":"1px solid #696969"}} className="  h-16  fixed bg-black w-full    bottom-0 flex justify-around items-center  border-black">
          <Link to="/">
            {location.pathname === "/" ? (
              <div style={{fontSize:"10px"}} className=" font-semibold flex-col gap-y-1 text-zinc-100 flex gap-x-4 items-center  md:md:text-lg">
                <div className="scale-125">
                  <HomeIcon /> 
                </div>
                <div>
                  Home
                </div>
              </div>
            ) : (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1   text-zinc-500 flex gap-x-4 items-center  md:md:text-lg">
                <div className="scale-125">
                  <HomeOutlinedIcon />
                </div>
                <div>
                  Home
                </div>  
              </div>
            )}
          </Link>
          <Link to="/explore">
            {location.pathname === "/explore" ? (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1   text-zinc-100 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <ExploreIcon />
                </div>    
                <div>
                  Explore
                </div>  
              </div>
            ) : (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1    text-zinc-500 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <ExploreOutlinedIcon />
                </div> 
                   <div>
                  Explore
                </div>  
              </div>
            )}
          </Link>

          <Link to="/reels">
            {location.pathname === "/reels" ? (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1   text-zinc-100 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <InstallMobileIcon />
                </div>  
                  <div>
                  Reels
                </div>  
              </div>
            ) : (
              <div style={{fontSize:"10px"}} className="  font-semibold  flex-col gap-y-1   text-zinc-500 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <InstallMobileOutlinedIcon />
                </div> 
                   <div>
                Reels
                </div>  
              </div>
            )}
          </Link>
          <Link to="/saved">
            {location.pathname === "/saved" ? (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1   text-zinc-100 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <BookmarkOutlinedIcon />
                </div> 
                   <div>
                  Saved
                </div>  
              </div>
            ) : (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1    text-zinc-500 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <BookmarkBorderOutlinedIcon />
                </div>    <div>
                  Saved
                </div>  
              </div>
            )}
          </Link>
          <Link to="/settings">
            {location.pathname === "/settings" ? (
              <div style={{fontSize:"10px"}} className="  font-semibold flex-col gap-y-1   text-zinc-100 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <SettingsIcon />
                </div>    
                <div>
                  Settings
                </div>  
              </div>
            ) : (
              <div style={{fontSize:"10px"}} className="  font-semibold  flex-col gap-y-1   text-zinc-500 flex gap-x-4 items-center  md:text-lg">
                <div className="scale-125">
                  <SettingsOutlinedIcon />
                </div>  
                  <div>
                  Settings
                </div>  
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Bottom;
