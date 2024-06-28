import Search from "./Search";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#2a3042] text-white px-4 py-2 flex justify-between items-center gap-4">
      <img src="Images/logoH.svg" alt="spectrax" width={150} />

      <Search />

      <Navbar />
    </div>
  );
};

export default Header;
