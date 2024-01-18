import { Fragment, useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import {
  CustomBtn,
  ContentLayout,
  CustomLink,
} from "../../utilities/components.styles";
import "./donation.styles.scss";

const Donation = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Fragment>
      <ContentLayout>
        <Card className="bg-dark text-white donation-card">
          <div className="donation-card-img-container">
            <Card.Img
              src="https://images.unsplash.com/photo-1483809715206-0499044b5b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card image"
              className="donation-card-img"
            />
          </div>
          <Card.ImgOverlay>
            <div className="donation-card-content-container">
              <div>
                <Card.Title>Support the community</Card.Title>
                <Card.Text>
                  Protect nature's beauty with a donation. Make a lasting impact
                  on biodiversity.
                </Card.Text>
              </div>
              <div>
                <Form.Label htmlFor="inputAmount">Amount of support</Form.Label>
                <Form.Control
                  type="number"
                  id="inputAmount"
                  aria-describedby="amountHelpBlock"
                  placeholder="In 1 euro units"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <Card.Text id="amountHelpBlock">
                  Please enter the amount of your support.
                </Card.Text>{" "}
              </div>
              <CustomLink to={"/checkout"} state={{ amount: amount }}>
                <CustomBtn disabled={amount === 0}>Donate</CustomBtn>
              </CustomLink>
            </div>
          </Card.ImgOverlay>
        </Card>
      </ContentLayout>
    </Fragment>
  );
};

export default Donation;
