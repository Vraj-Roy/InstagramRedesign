import NavBar from "../NavBar";

const Explore = () => {
  return (
    <>
      <div className="w-full md:w-[80%] bg-black">
        <NavBar />
        <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
          <div className="text-white text-2xl md:text-xl">Explore</div>
          <div className="flex text-zinc-200 text-sm  gap-x-5">
            <div className="hover:cursor-pointer  flex flex-col items-center ">
              <div>Latest</div>
              <div className="-mt-5 text-3xl">.</div>
            </div>
            <div className="text-zinc-400 hover:cursor-pointer">Popular</div>
          </div>
        </div>

        <div className="flex p-2 m-auto w-full md:w-fit">
          <div className="flex flex-col">
            <div className="rounded-3xl overflow-hidden  md:w-[400px] m-4">
              {" "}
              <img className="w-full h-full" src="/selfie.jpg" alt="" />{" "}
            </div>
            <div className="rounded-3xl overflow-hidden  md:w-[400px] m-4 ">
              <img className="w-full h-full" src="/ex1.png" alt="" />{" "}
            </div>
            <div className="md:hidden rounded-3xl overflow-hidden  m-4 ">
              <img className="w-full h-auto" src="/ex3.png" alt="" />{" "}
            </div>
          </div>
          <div className="rounded-3xl hidden md:block overflow-hidden w-[700px] fill h-[560px] m-4 ">
            <img className="w-full h-auto" src="/ex3.png" alt="" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;
