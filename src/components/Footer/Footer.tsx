import Logo from "../../assets/images/logo.png";
import { snsData } from "../../constants/sns";
import useNavigation from "../../hooks/useNavigation";

const Footer = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="flex w-full items-center justify-center bg-footer">
      <div className="relative flex h-64 w-[68%] flex-col justify-center max-sm:h-40 max-sm:w-full max-sm:px-[1.8rem]">
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

        <div className="absolute right-0 bottom-16 flex gap-4 max-sm:bottom-10">
          {snsData.map(({ id, name, url, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => navigateTo(url)}
              className="cursor-pointer text-gray-600 transition-colors duration-200 hover:text-white"
              aria-label={name}
            >
              <Icon className="h-10 w-10 max-sm:h-6 max-sm:w-6" />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
