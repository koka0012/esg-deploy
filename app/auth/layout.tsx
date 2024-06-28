export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen p-4 flex flex-col gap-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/Videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img src="/Images/logoV.svg" width={250} alt="logo" />

      <div className="h-screen flex justify-end items-center">{children}</div>

      <div className="text-xs text-white flex flex-col">
        <div className="drop-shadow-md">Desenvolvido por </div>

        <img src="/Images/logoH.svg" width={150} alt="logo" />

        <div className="drop-shadow-md">
          SpectraX 2024. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}
