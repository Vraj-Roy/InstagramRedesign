import Left from "./Left";
import Middle from "./Middle";
const Main = () => {
  return (
    <>
      <div className="flex">
        <Left />
        <div className="h-full w-[20vw] hidden md:block"></div>
        <Middle />
      </div>
    </>
  );
};
export default Main;
