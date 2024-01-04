import { Fragment } from "react";
import Card from "react-bootstrap/Card";

import { ContentLayout, CustomBtn } from "../../utilities/components.styles";
import "./support.styles.scss";

import { supportUsHeaderText, supportUsImg } from "../../asset";

const Support = () => {
  return (
    <Fragment>
      <div id="support">
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
    </Fragment>
  );
};

export default Support;
