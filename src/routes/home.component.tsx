import MainVisual from "../components/main-visual.component";
import AboutUs from "../components/about-us.component";
import AboutMichel from "../components/about-michel.component";
import News from "../components/news.component";
import EntryPayasso from "../components/entry-payasso/entry-payasso.component";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainVisual />
      <div>
        <AboutUs />
        <AboutMichel />
      </div>
      <News />
      <EntryPayasso />
    </div>
  );
};

export default Home;
