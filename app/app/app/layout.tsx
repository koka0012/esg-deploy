import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen text-zinc-100 overflow-hidden">
      <Header />

      <div className="bg-zinc-300 h-[90vh]">{children}</div>
    </div>
  );
}
