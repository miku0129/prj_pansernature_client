import MainVisual from "../components/main-visual.component";
import AboutUs from "../components/about-us.component";
import AboutMichel from "../components/about-michel.component";
import News from "../components/news.component";
import EntryHelloAsso from "../components/entry-helloasso.component";
import EntryContact from "../components/entry-contact.component";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <MainVisual />
      <div>
        <AboutUs />
        <AboutMichel />
      </div>
      <News />
      <div>
        <EntryHelloAsso />
        <EntryContact />
      </div>
    </div>
  );
};

export default Home;
