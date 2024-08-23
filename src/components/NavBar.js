import { TextField } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import IosShareIcon from "@mui/icons-material/IosShare";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
              className="py-2 px-4 w-60 rounded-lg bg-zinc-800 color-white hidden md:block "
              placeholder="Search"
            ></input>
              <img src="m.instagram-text.png" className="md:hidden h-8   w-auto" alt=";;" />
          </div>
          <div className="flex gap-x-3 items-center ">
            <div className="text-zinc-200 md:hidden block scale-110">
              <SearchOutlinedIcon />
            </div>
            <div className="text-zinc-200">
              <IosShareIcon />
            </div>
            <div className="text-zinc-200">
              <NotificationsNoneOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
