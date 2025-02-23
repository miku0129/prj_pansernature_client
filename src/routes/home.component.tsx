import MainVisual from "../components/main-visual.component";
import AboutUs from "../components/about-us.component";
import AboutMichel from "../components/about-michel.component";
import News from "../components/news.component";
import EntryPayasso from "../components/entry-payasso/entry-payasso.component";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <MainVisual />
        <AboutUs />
      </div>
      <AboutMichel />
      <News />
      <EntryPayasso />
    </div>
  );
};

export default Home;
