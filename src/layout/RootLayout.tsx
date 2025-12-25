import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <ScrollRestoration />
      <Navbar />
      <main className="flex w-full flex-1 justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
