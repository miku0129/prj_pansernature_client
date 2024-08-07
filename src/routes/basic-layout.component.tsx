import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";
import { HeaderAndFooterLayout } from "../utilities/components.styles";

const BasicLayout = () => {

  //functioning of scroll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <HeaderAndFooterLayout>
        <Header />
        <Outlet />
        <Footer />
      </HeaderAndFooterLayout>
    </Fragment>
  );
};

export default BasicLayout;