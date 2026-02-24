import useNavigation from "@/hooks/useNavigation";

const NotFound = () => {
  const { navigateTo } = useNavigation();

  const handleHomeClick = () => {
    navigateTo("/");
  };

  return (
    <div className="flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-6xl font-bold tracking-wider text-white/90">404</h1>

      <h2 className="mt-4 text-xl font-semibold text-white/70">
        페이지를 찾을 수 없습니다
      </h2>

      <p className="mt-3 text-sm text-white/60 max-w-md">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        <br />
        아래 버튼을 눌러 홈으로 돌아가세요.
      </p>

      <button
        onClick={handleHomeClick}
        className="mt-8 px-6 py-3 rounded-lg bg-white text-black font-semibold transition hover:bg-banner-bg-4 text-lg"
      >
        홈으로 이동
      </button>
    </div>
  );
};

export default NotFound;
