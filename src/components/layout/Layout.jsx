import Footer from "./footer";
import TopBar from "./topbar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <div className="flex flex-col justify-between h-full max-h-screen overflow-y-auto">
        {children}
        <Footer />
      </div>
    </>
  );
}
