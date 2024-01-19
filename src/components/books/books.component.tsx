import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BooksContentLayout } from "./books.styles";

import "./books.styles.scss";

import { dummy_book_list } from "./__dummy-books-data__";
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
