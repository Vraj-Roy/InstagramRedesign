import NavBar from "../NavBar";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import GridOnIcon from "@mui/icons-material/GridOn";
import FilterNoneIcon from "@mui/icons-material/FilterNone";    
const Reels=()=>{
    return <>
     <div className="w-full md:w-[80%] bg-black">
     <NavBar />
     <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
          <div className="text-white text-2xl md:text-xl">Reels</div>
          <div className="flex text-zinc-200 text-sm  gap-x-5">
            <div className="hover:cursor-pointer  flex flex-col items-center ">
              <div>
                <GridOnIcon />
              </div>
              <div className="-mt-5 text-3xl">.</div>
            </div>
            <div className="text-zinc-400 hover:cursor-pointer">
              <PlayLessonIcon />
            </div>
          </div>
        </div>

    <div className="md:flex md:w-[69vw] mx-4 md:m-auto">
        <div className="rounded-3xl w-full md:w-[40%] overflow-hidden md:mx-10  border-zinc-600"><img src="/Reels.jpg"/> </div>
        <div className="rounded-3xl bg-zinc-900 p-4 mt-8  md:p-10 w-full md:w-[60%]">
            <div className="border-b-2 border-zinc-600 pb-5">

            <div className="flex items-center gap-x-3 ">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden"> <img src="/feed3"/> </div>
                <div className="text-lg">Black123</div>
                <div> <button className="text-sky-500 border-2  border-sky-500 blue-700 rounded-lg p-1">Follow</button></div>
            </div>
            <div className=" m-1 text-lg ">Turn on Notifications</div>
            <div className="m-1 flex text-sky-200 flex-wrap  gap-2">
                <div className="">#cool</div>
                <div className="">#cool</div>
                <div className="">#beauty</div>
                <div className="">#beauty</div>
                <div className="">#next</div> 
                <div className="">#next</div> 
                <div className="">#cool</div>
                <div className="">#cool</div>
                <div className="">#beauty</div>
                <div className="">#beauty</div>
                <div className="">#next</div> 
                <div className="">#next</div> 
            </div>
            </div>
            
            <div>

            <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500 ">
                <div className="w-10 h-10 md:w md-h-20 md:w-20 md:h-20 rounded-full overflow-hidden"> <img src="/feed4"/> </div>
                <div className="text-lg mt-1 ml-1">newjdsaldsa123   
                    <div className="inline text-sky-200"> @Black123 <div className="text-zinc-100">Nice Pic...❤</div>
                
                <br/>
                <div className="inline text-zinc-300  mr-2"> 15h</div>
                <div className="inline text-zinc-300  mr-2"> 1 like</div>
                <div className="inline text-zinc-300  mr-2"> reply</div>

                    </div>
                <div className="text-zinc-300">
                    ---- View Replies
                </div>
                </div> 
                
                <div className="flex text-lg ">

                </div>
            </div>
            <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500 ">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden"> <img src="/feed4"/> </div>
                <div className="text-lg mt-1 ml-1">newjdsaldsa123   
                    <div className="inline text-sky-200"> @Black123 <div className="text-zinc-100">Beautifull Horse</div>
                
                <br/>
                <div className="inline text-zinc-300  mr-2"> 15h</div>
                <div className="inline text-zinc-300  mr-2"> 1 like</div>
                <div className="inline text-zinc-300  mr-2"> reply</div>

                    </div>
                <div className="text-zinc-300">
                    ---- View Replies
                </div>
                </div> 
                
                <div className="flex text-lg ">

                </div>
            </div>
            <div className="flex py-4 gap-x-3 border-b-2 border-zinc-500 ">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden"> <img src="/feed4"/> </div>
                <div className="text-lg mt-1 ml-1">newjdsaldsa123   
                    <div className="inline text-sky-200"> @Black123 <div className="text-zinc-100">😊😊😊</div>
                <br/>
                
                <div className="inline text-zinc-300  mr-2"> 15h</div>
                <div className="inline text-zinc-300  mr-2"> 1 like</div>
                <div className="inline text-zinc-300  mr-2"> reply</div>

                    </div>
                <div className="text-zinc-300">
                    ---- View Replies
                </div>
                </div> 
                
                <div className="flex text-lg ">

                </div>
            </div> 
     </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    </div>
    </>
}
export default Reels;