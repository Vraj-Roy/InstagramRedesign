import Feed from "./Feed";
import NavBar from "./NavBar";
import Stories from "./Stories";

const Middle = () => {
  return (
    <div className="w-full md:w-[80%] bg-black">
      <NavBar />
      <Stories />
      <Feed />
    </div>
  );
};
export default Middle;
