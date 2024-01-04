import { Fragment } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ContentLayout } from "../../utilities/components.styles";

import "./books.styles.scss";

import { dummy_book_list } from "./__dummy-books-data__";
const { book_list } = dummy_book_list;

const Books = () => {
  return (
    <Fragment>
      <ContentLayout>
        <h2 className="books-title">Our Books</h2>
        <Row xs={1} md={2} className="g-4">
          {book_list &&
            book_list.map((book, idx) => {
              const book_desc_intro = book.desc.slice(0, 100);
              return (
                <Col key={idx}>
                  <Card className="books-container">
                    <Card.Header>{book.feature}</Card.Header>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book_desc_intro}...</Card.Text>
                      <Button variant="outline-success">Read more</Button>
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

export default Books;
