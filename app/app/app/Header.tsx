import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-[10vh] bg-[#2a3042] text-zinc-100 p-4 flex justify-between items-center gap-4">
      <img src="images/logoH.svg" alt="spectrax" width={150} />

      <Navbar />
    </div>
  );
};

export default Header;
