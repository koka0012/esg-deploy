import Header from "./components/layout/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-cover bg-[url('../public/Images/bg_home.jpg')]">
      <Header />

      <div className="relative bg-opacity-0 bg-gray-900 inset-0 w-full h-full">
        {children}
      </div>
    </div>
  );
}
