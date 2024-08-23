import NavBar from "../NavBar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import {motion} from 'framer-motion'

const Settings = () => {
  return (
    <>
      <div className="w-full md:w-[80%] bg-black">
        <NavBar />
        <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
        <motion.div
          initial={{y:-10}}
          animate={{y:0}}
          exit={{y:0}}
          transition={{duration: 0.5}}
          className="text-white text-2xl md:text-xl">Settings</motion.div>
          <div className="flex text-zinc-400 text-sm  gap-x-5"></div>
        </div>

        <motion.div
         initial={{opacity:0 , scale:0.99, y:10}}
         animate={{opacity:1, scale:1 , y:0}}
         exit={{opacity:0 , y:0}}
         transition={{duration: 0.5}}
          className="flex md:flex-row flex-col">
          <div className="flex md:flex-col h-[5%] md:h-full  md:w-[5%] md:justify-center md:items-center bg-black gap-3 m-auto md:m-5">
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-white cursor-pointer ">
              <Person2Icon style={{ scale: "1.5" }} />
            </div>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-zinc-400 cursor-pointer ">
              <CircleNotificationsOutlinedIcon style={{ scale: "1.5" }} />
            </div>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-zinc-400 cursor-pointer ">
              <InfoOutlinedIcon style={{ scale: "1.5" }} />
            </div>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-zinc-400 cursor-pointer ">
              <LockOutlinedIcon style={{ scale: "1.5" }} />
            </div>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-zinc-400 hidden md:block">
              <CampaignOutlinedIcon style={{ scale: "1.5" }} />
            </div>
            <div className="p-4 md:p-5 bg-zinc-900 rounded-2xl text-zinc-400 cursor-pointer ">
              <PrivacyTipOutlinedIcon style={{ scale: "1.5" }} />
            </div>
          </div>
          <div className="md:p-10 p-5 rounded-2xl grid grid-flow-col grid-cols-3 md:w-[95%]  bg-zinc-900 gap-3 m-5">
            <div className="flex flex-col gap-y-2">
              <div className="font-bold md:text-2xl mb-1 ">
                Connections
              </div>
              <div className="text-zinc-400 text-sm">Restricted Accounts</div>
              <div className="text-zinc-400 text-sm">Blocked Accounts</div>
              <div className="text-zinc-400 text-sm">Muted Accounts</div>
              <div className="text-zinc-400 text-sm">Accounts you follow</div>
            </div>
            <div className="flex flex-col gap-y-2 mb-1">
              <div className="font-bold  md:text-2xl">
                Account Privacy
              </div>
              <div className="text-zinc-400 text-sm">Priavte Account</div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-bold  md:text-2xl mb-1">
                Interaction
              </div>
              <div className="text-zinc-400 text-sm">Limits</div>
              <div className="text-zinc-400 text-sm">Hidden Words</div>
              <div className="text-zinc-400 text-sm">Comments</div>
              <div className="text-zinc-400 text-sm">Posts</div>
              <div className="text-zinc-400 text-sm">Mentions</div>
              <div className="text-zinc-400 text-sm">Stories</div>
              <div className="text-zinc-400 text-sm">Reels and Remix</div>
              <div className="text-zinc-400 text-sm">Live</div>
              <div className="text-zinc-400 text-sm">Guides</div>
              <div className="text-zinc-400 text-sm">Activity Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Settings;
