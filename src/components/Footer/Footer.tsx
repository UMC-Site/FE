import InstagramIcon from "../../assets/images/icons/instagram.svg?react";
import Logo from "../../assets/images/logo.png";
import { INSTAGRAM_URL } from "../../constants/urls";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-black">
      <div className="relative flex h-64 w-3/5 flex-col justify-center max-sm:h-40 max-sm:w-11/12">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10 max-sm:w-5" />
          <p className="font-semibold text-white text-xl max-sm:text-base">
            HSU_MAKEUS CHALLENGE
          </p>
        </div>

        <p className="mt-10 text-2xl text-gray-600 leading-relaxed max-sm:mt-6 max-sm:text-sm">
          copyright ⓒhsu_makeus_challenge.
          <br />
          All rights reserved.
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 bottom-16 text-gray-600 transition-colors duration-200 hover:text-white max-sm:bottom-10"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-10 w-10 max-sm:h-6 max-sm:w-6" />
        </a>
      </div>
    </footer>
  );
  return <div className="w-full bg-[var(--color-footer)]">Footer</div>;
};

export default Footer;
