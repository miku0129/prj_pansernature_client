import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./components/home/home.component";
import ArticlesPreview from "./components/articles-preview/articles-preview.component";
import Contact from "./components/contact/contact.component";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPreview />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
