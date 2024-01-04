import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./routes/home.component";
import ArticlesPreview from "./components/articles-preview/articles-preview.component";
import Article from "./components/article/article.component";
import Contact from "./components/contact/contact.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPreview />} />
          <Route path="articles/:id" element={<Article />}></Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
