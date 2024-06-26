import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

import {
  ContentLayout,
  CustomBtn,
  CustomLink,
} from "../../utilities/components.styles";
import "./checkout-status.styles.scss";

const CheckoutStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const client_secret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (client_secret) {
      // Retrieve the PaymentIntent
      stripe.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        if (paymentIntent) {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Success! Payment received.");
              break;

            case "processing":
              setMessage(
                "Payment processing. We'll update you when payment is received."
              );
              break;

            case "requires_payment_method":
              setMessage("Payment failed. Please try another payment method.");
              // Redirect your user back to your payment page to attempt collecting
              // payment again
              break;

            default:
              setMessage("Something went wrong.");
              break;
          }
        }
      });
    }
  }, [stripe]);

  return (
    <ContentLayout>
      <h1 className="status-message">{message}</h1>
      <CustomLink to={"/"}>
        <CustomBtn>Back to home</CustomBtn>
      </CustomLink>
    </ContentLayout>
  );
};

export default CheckoutStatus;
