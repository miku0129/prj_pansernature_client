import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ContentLayout } from "../../utilities/components.styles";
import "./news.styles.scss";

import { dummy_news } from "./__dumy-news-data__";
const { news } = dummy_news;

const News = () => {
  return (
    <Fragment>
      <ContentLayout>
        <Row xs={1} md={3} className="g-4">
          {news &&
            //最新のニュースを3つだけ表示させる
            news
              .filter((item, idx) => idx >= news.length - 3)
              .map((item, idx) => {
                let text_intro = item.text.slice(0, 50);
                return (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{text_intro}...</Card.Text>
                        <Card.Text>{item.published_date}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </Row>
      </ContentLayout>
    </Fragment>
  );
};

export default News;
