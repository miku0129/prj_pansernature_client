import { Fragment, useEffect, useState } from "react";

import { getPostsFromFacebook } from "../../utilities/helper";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ContentLayout } from "../../utilities/components.styles";
import "./news.styles.scss";


type Post = {
  id: string;
  created_time: string;
  full_picture: string;
  message: string;
  permalink_url: string;
};

const News = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPostsFromFB = async () => {
      const posts = await getPostsFromFacebook();
      setPosts(posts);
    };
    getPostsFromFB();
  }, []);

  return (
    posts && (
      <Fragment>
        <ContentLayout>
          <Row xs={1} md={3} className="g-4">
            {posts &&
              //最新のニュースを3つだけ表示させる
              posts
                .filter((item: Post) => item.message)
                .filter((_, idx) => idx < 3)
                .map((item: Post, idx) => {
                  const text_intro = item.message.slice(0, 50);
                  const date = new Date(item.created_time);
                  const [month, day, year] = [
                    date.getMonth(),
                    date.getDate(),
                    date.getFullYear(),
                  ];
                  const pub_date = `${month}/${day}/${year}`;
                  return (
                    <Col key={idx}>
                      <a
                        className="fb-link"
                        href={item.permalink_url}
                        target="blank"
                      >
                        <Card className="news-container">
                          <div className="news-img-container">
                            <Card.Img
                              className="news-img"
                              variant="top"
                              src={item.full_picture}
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>{text_intro}...</Card.Title>
                            <Card.Text>{pub_date}</Card.Text>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
          </Row>
        </ContentLayout>
      </Fragment>
    )
  );
};

export default News;
