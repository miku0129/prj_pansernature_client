import { Fragment } from "react";

import MainVisual from "../components/main-visual/main-visual.component";
import AboutUs from "../components/about-us/about-us.component";
import News from "../components/news/news.component";
import Support from "../components/support/support.component";
import Books from "../components/books/books.component";

import { HomeLayout } from "../utilities/components.styles";

const Home = () => {
  return (
    <Fragment>
      <HomeLayout>
        <MainVisual />
        {/* <AboutUs />
        <News />
        <Support />
        <Books /> */}
      </HomeLayout>
    </Fragment>
  );
};

export default Home;
