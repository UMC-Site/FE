import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { logPageView } from "@/lib/analytics";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    logPageView(path, document.title);
  }, [location.pathname, location.search]);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <ScrollRestoration
        getKey={(location) => {
          if (location.pathname === "/project") {
            return "project";
          }
          return location.pathname;
        }}
      />
      <Navbar />
      <main className="flex w-full flex-1 justify-center pt-32 max-sm:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
