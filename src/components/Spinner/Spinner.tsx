import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <ClipLoader color="var(--color-banner-bg-4)" size={40} />
    </div>
  );
};

export default Spinner;
