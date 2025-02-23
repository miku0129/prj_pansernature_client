// import { useEffect } from "react";
// import { initializeItemsData } from "./utilities/firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./routes/home.component";
import ArticlesPreview from "./components/articles-preview.component";
import Article from "./components/article.component";
import Contact from "./components/contact.component";

import ScrollToTop from "./utilities/scroll-to-top";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeItemsData();
  //   };
  //   initCategoryData();
  // }, []);
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPreview />} />
          <Route path="articles/:id" element={<Article />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
