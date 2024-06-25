import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen text-zinc-100">
      <Header />

      <div className="h-[85vh] bg-zinc-800">{children}</div>

      <Footer />
    </div>
  );
}
