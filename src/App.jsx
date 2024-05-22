import Layout from "./components/layout/Layout";
import { cn } from "@/lib/utils";
import { AppProvider } from "./providers/app/app-provider";

export default function App({ children }) {
  return (
    <AppProvider>
      <div
        className={cn(
          "min-h-screen max-h-screen overflow-hidden bg-background font-lato antialiased"
        )}
      >
        <main className="h-screen flex flex-col">
          <Layout>{children}</Layout>
        </main>
      </div>
    </AppProvider>
  );
}
