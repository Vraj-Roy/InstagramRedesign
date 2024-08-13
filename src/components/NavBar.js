import { TextField } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import IosShareIcon from "@mui/icons-material/IosShare";
import NotificationsIcon from "@mui/icons-material/Notifications";
const NavBar = () => {
  return (
    <>
      <nav className="bg-zinc-900 p-4   border-b-2 border-zinc-700">
        <div className="flex items-center justify-between">
          <div>
            <div className=" "></div>
            {/* <PlayCircleFilledWhiteOutlinedIcon/> */}
            <input
              type="text"
              className="py-2 px-4 w-60 rounded-lg bg-zinc-800 color-white "
              placeholder="Search"
            ></input>
          </div>
          <div className="flex gap-x-3">
            <div className="text-zinc-200">
              <IosShareIcon />
            </div>
            <div className="text-zinc-200">
              <NotificationsIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
