import { Fragment } from "react";
import Card from "react-bootstrap/Card";

import {
  ContentLayout,
  CustomBtn,
  CustomLink,
} from "../../utilities/components.styles";
import "./entry-payasso.styles.scss";

import { entryPayassoHeadline, entryPayasoText, supportUsImg } from "../../asset";

const EntryPayasso = () => {
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
                <h2>{entryPayassoHeadline}</h2>
              </Card.Title>
              <Card.Text>{entryPayasoText}</Card.Text>
              <CustomLink to={"/donation"}>
                <CustomBtn>Découvrir</CustomBtn>
              </CustomLink>
            </Card.ImgOverlay>
          </Card>
        </ContentLayout>
      </div>
    </Fragment>
  );
};

export default EntryPayasso;
