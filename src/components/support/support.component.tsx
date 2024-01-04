import { Fragment } from "react";
import Card from "react-bootstrap/Card";

import { ContentLayout, CustomBtn } from "../../utilities/components.styles";
import "./support.styles.scss";

import { supportUsHeaderText, supportUsImg } from "../../asset";

const Support = () => {
  return (
    <Fragment>
      <div>
        <ContentLayout>
          <Card className="bg-dark text-white">
            <div className="custom-card-img-container">
              <Card.Img src={supportUsImg} alt="Card image" />
            </div>
            <Card.ImgOverlay>
              <Card.Title>
                <h2>Support</h2>
              </Card.Title>
              <Card.Text>{supportUsHeaderText}</Card.Text>
              <CustomBtn>Learn more</CustomBtn>
            </Card.ImgOverlay>
          </Card>
        </ContentLayout>
      </div>

      {/* <div className="about-us-contentainer">
        <div className="about-us-img-container">
          <img
            className="about-us-img"
            alt="about us visual"
            src={aboutUsImg}
          />
        </div>
        <div className="about-us-card-container">
          <h2 className="about-us-card-title">Support our community</h2>
          <div className="about-us-card">
            <span>{supportUsHeaderText}</span>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Support;
