import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { NAV_ITEMS } from "../../constants/navigation";
import useNavigation from "../../hooks/useNavigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigateTo } = useNavigation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleHomeClick = () => {
    navigateTo("/");
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  const bgClass = menuOpen
    ? "bg-black"
    : scrolled
      ? "bg-black/90 backdrop-blur-md"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex h-32 w-full justify-center transition-all duration-300 ease-in-out max-sm:h-24 ${bgClass}`}
    >
      <div className="flex w-[68%] items-center justify-between max-sm:w-full max-sm:px-[1.8rem]">
        <button
          type="button"
          onClick={handleHomeClick}
          className="flex cursor-pointer items-center gap-3"
          aria-label="홈으로 이동"
        >
          <img src={Logo} alt="logo" className="w-10 max-sm:w-12" />
        </button>

        {/* Desktop */}
        <nav className="hidden items-center sm:flex">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`cursor-pointer text-white text-xl transition-colors duration-200 hover:text-primary-400 ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile */}
        <MobileNav
          isOpen={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
          onClose={closeMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
