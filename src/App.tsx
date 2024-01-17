import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./routes/home.component";
import ArticlesPreview from "./components/articles-preview/articles-preview.component";
import Article from "./components/article/article.component";
import Contact from "./components/contact/contact.component";
import Donation from "./components/donation/donation.component";

import DonationCheckout from "./components/donation-checkout/donation-checkout.component";
import DonationCheckoutStatus from "./components/donation-checkout-status/donation-checkout-status.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPreview />} />
          <Route path="articles/:id" element={<Article />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donation/" element={<Donation />} />
          <Route path="donation/checkout" element={<DonationCheckout />} />
          <Route path="donation/status" element={<DonationCheckoutStatus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
