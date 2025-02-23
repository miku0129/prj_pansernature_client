import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header.component";
import Footer from "../components/footer.component";
import { HeaderAndFooterLayout } from "../utilities/components.styles";

const BasicLayout = () => {
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
