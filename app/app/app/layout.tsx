import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
