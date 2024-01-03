import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import "./articles-preview.styles.scss";

import { dummy_articles } from "./__dummy-article-data__";

type CurrentItems = {
  currentItems: Article[];
};
type ItemsPerPage = {
  itemsPerPage: number;
};

const ArticlesPreview = () => {
  const { articles } = dummy_articles;

  function Items({ currentItems }: CurrentItems) {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item) => (
            <h3>
              <span>{item.id}</span>: Item #{item.category}
            </h3>
          ))}
      </div>
    );
  }
  function PaginatedItems({ itemsPerPage }: ItemsPerPage) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = articles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(articles.length / itemsPerPage);

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => {
            // Invoke when user click to request another page.
            const { selected } = e;
            const newOffset = (selected * itemsPerPage) % articles.length;
            console.log(
              `User requested page number ${selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
          }}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <Fragment>
      <div id="container">
        <PaginatedItems itemsPerPage={3} />,
      </div>
      {/* <div>
        <Row xs={1} md={3} className="g-4">
          {articles.map((article, idx) => {
            const text_intro = article.text.slice(0, 50);
            return (
              <Col key={idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100px160"
                  />
                  <Card.Body>
                    <Card.Title>{article.title} </Card.Title>
                    <p>category: {article.category}</p>
                    <Card.Text>{text_intro}...</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div> */}
    </Fragment>
  );
};

export default ArticlesPreview;
