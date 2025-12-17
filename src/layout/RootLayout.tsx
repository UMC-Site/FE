import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1 pageContainer">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
