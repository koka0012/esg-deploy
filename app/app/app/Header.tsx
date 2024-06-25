import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-[10vh] min-h-[75px] bg-zinc-900 text-zinc-100 p-4 flex justify-between items-center gap-4">
      <img src="images/logoH.svg" alt="spectrax" width={150} />

      <Navbar />
    </div>
  );
};

export default Header;
