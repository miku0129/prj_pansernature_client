import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BooksContentLayout } from "./books.styles";

import "./books.styles.scss";
import { dummy_book_list } from "./__dummy-books-data__";

//test: getting link of PDF in nextcloud
import axios from "axios";
const getResponse = async () => {
  const res = await axios.post(
    process.env.REACT_APP_NEXTCLOUD_BASE_URL!,
    `${process.env.REACT_APP_NEXTCLOUD_PDF1_URL!}&shareType=3`,
    {
      headers: {
        "OCS-APIRequest": "true",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: process.env.REACT_APP_NEXTCLOUD_USERNAME!,
        password: process.env.REACT_APP_NEXTCLOUD_PASSWORD!,
      },
    }
  );

  console.log("res: ",res.data.ocs.data.url );
};

const { book_list } = dummy_book_list;

const Books = () => {
  return (
    <Fragment>
      <BooksContentLayout id="books">
        <h2 className="books-title">Our Books</h2>
        <Row xs={1} md={2} className="g-4">
          {book_list &&
            book_list.map((book, idx) => {
              const book_desc_intro = book.desc.slice(0, 100);
              return (
                <Col key={idx}>
                  <Card>
                    <div className="book-img-container">
                      <Card.Img
                        className="book-img"
                        variant="top"
                        src={book.img}
                      />
                    </div>
                    <Card.Body>
                      <Card.Text>{book_desc_intro}</Card.Text>
                      <Card.Link>Learn more</Card.Link>
                      {/* <button onClick={getResponse}>click me</button> */}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </BooksContentLayout>
    </Fragment>
  );
};

export default Books;
