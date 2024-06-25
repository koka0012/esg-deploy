export const Label = () => {
  return (
    <div className="flex flex-col mx-2">
      <div className="mb-2">
        <div className="mx-4 mb-2 font-bold text-zinc-300">Data</div>
        <div className="mx-8">
          <div className="flex flex-row">
            <div className="bg-orange-800 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              25,2 a 99,8 (2.498)
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              9,9 a 25,2 (2.509)
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-400 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              2,3 a 9,9 (2.527)
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-300 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              1,3 a 2,3 (2.699)
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-100 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              0,1 a 1,3 (2.656)
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-4 mb-2 font-bold text-zinc-300">Data</div>
        <div className="mx-8">
          <div className="flex flex-row">
            <div className="bg-green-500 rounded-sm w-4 h-4 mr-4" />
            <div className="text-[13px] text-zinc-300 font-medium">
              Total Data ($)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
