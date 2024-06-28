import { login } from "../lib/api/login";
import { ContextsContainer } from "./components/contexts";
import Header from "./components/layout/Header";
import { Map } from "./components/map";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const credentials = await login();

  return (
    <ContextsContainer>
      <div className="flex flex-col h-screen overflow-hidden bg-cover">
        <Header />
        <div className="relative bg-opacity-0 bg-gray-900 inset-0 w-full h-full">
          <Map apiToken={credentials.token} />
          <div className="relative h-full pointer-events-none">
            {children}
          </div>
        </div>
      </div>
    </ContextsContainer>

  );
}
