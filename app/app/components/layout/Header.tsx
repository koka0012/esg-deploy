import Search from "./Search";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-[10vh] bg-[#2a3042] text-white p-4 flex justify-between items-center gap-4">
      <img src="Images/logoH.svg" alt="spectrax" width={150} />

      <Search />

      <Navbar />
    </div>
  );
};

export default Header;
