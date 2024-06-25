import Card from "./card";

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-full p-12">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/images/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex h-full items-start">
        <img src="/images/logoV.svg" width={248} height={128} alt="logo" />
      </div>
      <div className="flex justify-end">
        <div className="backdrop-blur-sm sm:w-1/2 w-full">
          <Card />
        </div>
      </div>
      <div className="flex flex-col h-full justify-end">
        <p className="text-zinc-100 drop-shadow-md">Desenvolvido por </p>
        <img src="/images/logoH.svg" width={150} height={150} alt="logo" />
        <p className="text-zinc-100 drop-shadow-md">
          SpectraX 2024. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Page;
