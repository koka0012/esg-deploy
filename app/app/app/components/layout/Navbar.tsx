import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/components";

import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <Search />

      <div className="flex gap-2">
        <Button>
          <Cog6ToothIcon className="w-5" />
        </Button>

        <Button>
          <ArrowRightStartOnRectangleIcon className="w-5" />
        </Button>

        <Button>
          <BellIcon className="w-5" />
        </Button>

        <button
          type="button"
          className="h-[2.25rem] w-[2.25rem] rounded-full overflow-hidden"
        >
          <img src="images/user.svg" alt="user" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
