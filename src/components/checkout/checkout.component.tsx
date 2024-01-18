import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkout-form/checkout-form.component";

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
  console.log("state", state);
  const amount = state.amount * 100;

  const stripePromise = initStripe();

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("http://localhost:8080/stripe", {
        amount: amount,
      });

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
    createPaymentIntent();
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
          <div className="checkout-confirmation-msg">
            You are going to donate <span className="checkout-confirmation-amount">{state.amount}</span> euro. 
            <br /> Thank you for your support. 
          </div>
          <CheckoutForm />
        </Elements>
      )}
    </ContentLayout>
  );
};

export default Checkout;
