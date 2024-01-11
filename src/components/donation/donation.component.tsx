import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import { CustomBtn, ContentLayout } from "../../utilities/components.styles";
import "./donation.styles.scss";

const donation_info = [
  {
    amount: 10,
    img_url:
      "https://images.unsplash.com/photo-1483809715206-0499044b5b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Protect nature's beauty with a donation. Make a lasting impact on biodiversity.",
    payment_link: "https://buy.stripe.com/test_eVa7un9PN9Xt4vK145",
  },
  {
    amount: 20,
    img_url:
      "https://images.unsplash.com/photo-1682256195950-59bf8cc91ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Support conservation, preserve nature's beauty. Your donation makes a difference.",
    payment_link: "https://buy.stripe.com/test_eVa7un9PN9Xt4vK145",
  },
  {
    amount: 50,
    img_url:
      "https://plus.unsplash.com/premium_photo-1678836292813-292d6cd852aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Donate to protect biodiversity. Make a lasting impact on our planet's beauty.",
    payment_link: "https://buy.stripe.com/test_eVa7un9PN9Xt4vK145",
  },
];

const Donation = () => {
  return (
    <Fragment>
      <ContentLayout className="donation-card-container">
        {donation_info.map((info) => {
          return (
            <Card className="donation-card">
              <div className="donation-card-img-container">
                <Card.Img
                  variant="top"
                  src={info.img_url}
                  className="donation-card-img"
                />
              </div>
              <Card.Body className="donation-card-text-container">
                <Card.Text>{info.text}</Card.Text>
                <a href={info.payment_link} target="_blank" rel="noreferrer">
                  <CustomBtn>Donate {info.amount} euros</CustomBtn>
                </a>
              </Card.Body>
            </Card>
          );
        })}
      </ContentLayout>
    </Fragment>
  );
};

export default Donation;
