import NavBar from "../NavBar";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import Person2Icon from '@mui/icons-material/Person2';
const Settings = ()=>{
    return (
        <>
         <div className="w-full md:w-[80%] bg-black">
         <NavBar />
         <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
          <div className="text-white text-2xl md:text-xl">Settings</div>
          <div className="flex text-zinc-200 text-sm  gap-x-5">
            
            
          </div>
        </div>

        <div className="flex md:flex-row flex-col">
            <div className="flex md:flex-col h-[5%] md:h-full md:w-[5%] md:justify-center md:items-center bg-black gap-3 m-5">
                <div className="p-5 bg-zinc-900 rounded-2xl text-white "><Person2Icon style={{'scale':'1.5'}}/></div>
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-200 "><CircleNotificationsOutlinedIcon style={{'scale':'1.5'}}/></div>
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-200 "><InfoOutlinedIcon style={{'scale':'1.5'}}/></div>
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-200 "><LockOutlinedIcon style={{'scale':'1.5'}}/></div>
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-200 hidden md:block"><CampaignOutlinedIcon style={{'scale':'1.5'}}/></div>
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-200 "><PrivacyTipOutlinedIcon style={{'scale':'1.5'}}/></div>
            </div>
            <div className="md:p-10 p-5 rounded-2xl grid grid-flow-col grid-cols-3 md:w-[95%]  bg-zinc-900 gap-3 m-5">
                <div className="flex flex-col gap-y-2">
                    <div className="font-bold text-sm md:text-2xl mb-1">Connections</div>
                    <div className="text-zinc-200">Restricted Accounts</div>
                    <div className="text-zinc-200">Blocked Accounts</div>
                    <div className="text-zinc-200">Muted Accounts</div>
                    <div className="text-zinc-200">Accounts you follow</div>
                </div> 
                <div className="flex flex-col gap-y-2 mb-1">
                    <div className="font-bold text-sm md:text-2xl">Account Privacy</div>
                    <div className="text-zinc-200">Priavte Account</div> 
                </div> 
                <div className="flex flex-col gap-y-2">
                    <div className="font-bold text-sm md:text-2xl mb-1">Interaction</div>
                    <div className="text-zinc-200">Limits</div>
                    <div className="text-zinc-200">Hidden Words</div>
                    <div className="text-zinc-200">Comments</div>
                    <div className="text-zinc-200">Posts</div>
                    <div className="text-zinc-200">Mentions</div>
                    <div className="text-zinc-200">Stories</div>
                    <div className="text-zinc-200">Reels and Remix</div>
                    <div className="text-zinc-200">Live</div>
                    <div className="text-zinc-200">Guides</div>
                    <div className="text-zinc-200">Activity Status</div>
                </div> 
                 
            </div>
        </div>
    </div>
        </>
    )
}
export default Settings;