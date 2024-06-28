import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Label = () => {


  return (
    <div className="flex flex-col mx-2">
      <div className="mb-2">
        <div className="text-[11px] mx-1 mb-2 font-bold text-zinc-300 flex flex-row gap-1">
          <ChevronDownIcon className="w-3" />
          <p>Severity (%)</p>
        </div>
        <div className="mx-8">
          <div className="flex flex-row">
            <div className="bg-orange-800 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              25,2 a 99,8 (2.498)
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              9,9 a 25,2 (2.509)
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-400 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              2,3 a 9,9 (2.527)
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-300 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              1,3 a 2,3 (2.699)
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-100 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              0,1 a 1,3 (2.656)
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[11px] mx-1 mb-2 font-bold text-zinc-300 flex flex-row gap-1">
          <ChevronDownIcon className="w-3" />
          <p>Counties</p>
        </div>
        <div className="mx-8">
          <div className="flex flex-row">
            <div className="bg-green-500 rounded-sm w-3 h-3 mr-3 mb-1" />
            <p className="text-[9px] text-zinc-300 font-medium">
              Total Amount Due ($)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
