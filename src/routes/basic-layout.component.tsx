import { Outlet } from "react-router-dom";

import Header from "../components/header.component";
import Footer from "../components/footer.component";

const BasicLayout = () => {
  return (
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
};

export default BasicLayout;
