import { Activities, Apply, Banner, Goal, Intro, Stage } from "./components";

const Home = () => {
  return (
    <div className="pageContainer">
      <Banner />
      <Intro />
      <Goal />
      <Stage />
      <Activities />
      <Apply />
    </div>
  );
};

export default Home;
