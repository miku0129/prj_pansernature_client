import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../checkout-form/checkout-form.component";
import CheckoutStatus from "../checkout-status/checkout-status.component";

import { ContentLayout } from "../../utilities/components.styles";
import "./checkout.styles.scss";

type AmountType = {
  amount: number;
};

const initStripe = async () => {
  const res = await axios.get("http://localhost:8080/stripe");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = () => {
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  const location = useLocation();
  const state = location.state as AmountType;

  let amount: undefined | number;
  if (state) {
    amount = state.amount * 100;
  }

  const stripePromise = initStripe();

  useEffect(() => {
    async function createPaymentIntent(amt: number | undefined) {
      const response = await axios.post("http://localhost:8080/stripe", {
        amount: amt,
      });

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
    createPaymentIntent(amount);
  }, [amount]);

  return (
    <ContentLayout>
      {clientSecretSettings.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          {state && state.amount && (
            <div className="checkout-confirmation-msg">
              You are going to donate{" "}
              <span className="checkout-confirmation-amount">
                {state.amount}
              </span>{" "}
              euro.
              <br /> Thank you for your support.
            </div>
          )}
          <Routes>
            <Route path="/*" element={<CheckoutForm />} />
            <Route path="/checkout-status" element={<CheckoutStatus />} />
          </Routes>
        </Elements>
      )}
    </ContentLayout>
  );
};

export default Checkout;
