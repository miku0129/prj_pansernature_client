import { Fragment, useState, useContext } from "react";
import ReactPaginate from "react-paginate";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ArticlesPreviewCustomLink } from "./articles-preview.styles";
import "./articles-preview.styles.scss";

import { ArticlesContext } from "../../context/articles.context";

type CurrentItems = {
  currentItems: Article[];
};
type ItemsPerPage = {
  itemsPerPage: number;
};

const ArticlesPreview = () => {
  const articles = useContext(ArticlesContext)[0];

  function Items({ currentItems }: CurrentItems) {
    return (
      <div className="items">
        <Row xs={1} md={3} className="g-4">
          {currentItems &&
            currentItems.map((article, idx) => {
              const text_intro = article.text[0].slice(0, 120);
              return (
                <Col key={idx}>
                  <ArticlesPreviewCustomLink to={`/articles/${article.id}`}>
                    <Card className="bg-dark text-white">
                      <Card.Img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100px16"
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{article && article.title}</Card.Title>
                        <Card.Text>{article.category}</Card.Text>
                        <Card.Text>{text_intro}...</Card.Text>
                      </Card.ImgOverlay>
                    </Card>

                    {/* <Card className="article-card">
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100px160"
                      />
                      <Card.Body>
                        <Card.Title>{article.title} </Card.Title>
                        <p>
                          <span>{article.id}/</span>category: {article.category}
                        </p>
                        <Card.Text>{text_intro}...</Card.Text>
                      </Card.Body>
                    </Card> */}
                  </ArticlesPreviewCustomLink>
                </Col>
              );
            })}
        </Row>
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
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <Fragment>
      <div id="container">
        <PaginatedItems itemsPerPage={6} />,
      </div>
    </Fragment>
  );
};

export default ArticlesPreview;
