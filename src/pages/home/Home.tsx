import { Activities, Apply, Banner, Goal, Intro, Stage } from "./components";

const Home = () => {
  return (
    <main className="pageContainer">
      <Banner />
      <Intro />
      <Goal />
      <Stage />
      <Activities />
      <Apply />
    </main>
  );
};

export default Home;
