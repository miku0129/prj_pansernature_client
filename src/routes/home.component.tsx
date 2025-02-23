import { Fragment } from "react";

import MainVisual from "../components/main-visual/main-visual.component";
import AboutUs from "../components/about-us/about-us.component";
import AboutMichel from "../components/about-michel/about-michel.component";
import News from "../components/news/news.component";
import EntryPayasso from "../components/entry-payasso/entry-payasso.component";

import { HomeLayout } from "../utilities/components.styles";

const Home = () => {
  return (
    <Fragment>
      <HomeLayout>
        <MainVisual />
        <AboutUs />
        <AboutMichel />
        <News />
        <EntryPayasso />
      </HomeLayout>
    </Fragment>
  );
};

export default Home;
