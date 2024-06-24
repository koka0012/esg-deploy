import Card from "./card";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full p-12">
      <iframe 
        className="absolute top-0 left-0 w-full h-full -z-10" 
        src="https://www.youtube.com/embed/S0a2V0MqPnc?autoplay=1&mute=1&loop=1&playlist=S0a2V0MqPnc&controls=0&showinfo=0&modestbranding=1&fs=0" 
        allow=" autoplay" 
        allowFullScreen
      ></iframe>
      <div className="flex h-full items-start">
        <img src="/images/logoV.svg" width={248} height={128} alt="logo" />
      </div>
      <div className="flex justify-end">
        <div className="backdrop-blur-sm w-1/2">
          <Card />
        </div>
      </div>
      <div className="flex flex-col h-full justify-end">
        <p className="text-zinc-200 drop-shadow-md">Desenvolvido por </p>
        <img src="/images/logoH.svg" width={150} height={150} alt="logo" />
        <p className="text-zinc-200 drop-shadow-md" >
          SpectraX 2024. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default page;
