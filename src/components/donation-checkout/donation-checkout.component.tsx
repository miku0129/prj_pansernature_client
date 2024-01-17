import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonationCheckoutForm from "../donation-checkout-form/donation-checkout-form.component";
import "./donation-checkout.styles.scss";

const initStripe = async () => {
  const res = await axios.get("http://localhost:8080/stripe");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const DonationCheckout = () => {
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  const stripePromise = initStripe();

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("http://localhost:8080/stripe", {});

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
    createPaymentIntent();
  }, []);

  return (
    <div>
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
          <DonationCheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default DonationCheckout;
