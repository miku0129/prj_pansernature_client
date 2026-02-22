import { useEffect, useState } from "react";
import { getPostsFromFacebook } from "../utilities/helper";

import { Card, Col, Row } from "react-bootstrap";

import { desInfosHeadline } from "../asset";

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
      <div className="px-5" id="infos">
        <div className="text-4xl">{desInfosHeadline}</div>
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
                      className="no-underline"
                      href={item.permalink_url}
                      target="blank"
                    >
                      <Card className="max-h-[calc(300/16*1rem)] min-h-[calc(300/16*1rem)]">
                        <div className="max-h-[calc(200/16*1rem)] truncate">
                          <Card.Img
                            className="bg-cover"
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
      </div>
    )
  );
};

export default News;
