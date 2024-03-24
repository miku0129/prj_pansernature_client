import { Fragment, useEffect, useState } from "react";

import { dummy_news } from "./__dummy-news-data__";
import { getPostsFromFacebook } from "../../utilities/helper";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ContentLayout } from "../../utilities/components.styles";
import "./news.styles.scss";

const { news } = dummy_news;

const News = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPostsFromFB = async () => {
      const posts = await getPostsFromFacebook();
      setPosts(posts)
    };
    getPostsFromFB();
  }, []);
  console.log("posts", posts);


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
                      <div className="news-img-container">
                        <Card.Img
                          className="news-img"
                          variant="top"
                          src={item.img}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{item && item.title}</Card.Title>
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
