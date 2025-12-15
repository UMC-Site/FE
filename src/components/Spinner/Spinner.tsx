import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ClipLoader color="var(--color-banner-bg-4)" size={10} />
    </div>
  );
};

export default Spinner;
