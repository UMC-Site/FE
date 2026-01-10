import { Link } from "react-router-dom";
import CloseIcon from "../../assets/images/icons/close.svg?react";
import MenuIcon from "../../assets/images/icons/menu.svg?react";
import { NAV_ITEMS } from "../../constants/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onToggle, onClose }: MobileNavProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="flex h-12 w-12 cursor-pointer items-center justify-center sm:hidden"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        {isOpen ? (
          <CloseIcon className="h-7 w-7 text-white" />
        ) : (
          <MenuIcon className="h-7 w-7 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed top-28 right-0 bottom-0 left-0 z-40 flex animate-fade-in flex-col items-center bg-menu-bg pt-12 pb-8">
          <nav className="flex w-full flex-col items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="cursor-pointer py-2 font-medium text-3xl text-menu transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
