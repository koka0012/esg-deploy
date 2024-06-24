import Card from "./card";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-[url('../public/images/bg.png')] p-12">
      <div className="flex h-screen">
      <div className="text-slate-100 text-[32px] font-bold"> SpectraX</div>
      </div>
      <div className="flex justify-end ">
        <div className="backdrop-blur w-3/5">
          <Card />
        </div>
      </div>
      <div className="flex flex-col h-screen justify-end">
        <p className="text-slate-100">Desenvolvido por </p>
        <div className="text-slate-100 text-[32px] font-bold"> SpectraX</div>
        <p className="text-slate-100">SpectraX 2024. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default page;
