import { Fragment, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { ArticlesContext } from "../../context/articles.context";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ArticlesPreviewCustomLink } from "./articles-preview.styles";
import "./articles-preview.styles.scss";

type CurrentItems = {
  currentItems: Article[];
};
type ItemsPerPage = {
  itemsPerPage: number;
};

type PreviewPropsType = {
  previewtype?: AgriJardin | VieAssociative | DesobeissanceCivile;
};

const ArticlesPreview = () => {
  const location = useLocation();
  const state = location.state as PreviewPropsType;

  let articles = useContext(ArticlesContext)[0];

  if (articles) {
    if (state !== null) {
      if (state.previewtype === "Agri-jardin") {
        articles = articles.filter(
          (article: Article) => article.category === "Agri jardin"
        );
      } else if (state.previewtype === "Vie-associative") {
        articles = articles.filter(
          (article: Article) => article.category === "Vie associative"
        );
      } else {
        articles = articles.filter(
          (article: Article) => article.category === "Désobéissance civile"
        );
      }
    }
  }

  //articleの個数がUIに影響する。後でデザイン調整が必要
  if (articles && articles.length % 4 !== 0) {
    let counter = articles.length % 4;
    const empty_article = {
      id: 0,
      title: "place holder",
      category: "",
      published_date: "",
      text: "",
    };
    while (counter < 4) {
      articles.push(empty_article);
      counter += 1;
    }
  }

  function Items({ currentItems }: CurrentItems) {
    return (
      <div className="items">
        <Row xs={1} md={3} lg={4} className="g-4">
          {currentItems &&
            currentItems.map((article, idx) => {
              let text_intro = "";
              if (typeof article.text[0] === "string") {
                text_intro = article.text[0].slice(0, 100).replaceAll("*", "");
              }
              return (
                <Col key={idx}>
                  <ArticlesPreviewCustomLink
                    to={`/articles/${article.id}`}
                    className="article-card-container"
                  >
                    <Card
                      border="success"
                      className="article-card"
                      style={{ width: "18rem" }}
                    >
                      <Card.Header>{article.category}</Card.Header>
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{text_intro}...</Card.Text>
                      </Card.Body>
                    </Card>
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
    const currentItems = () => {
      if (articles) {
        return articles.slice(itemOffset, endOffset);
      }
    };
    const pageCount = () => {
      if (articles) {
        return Math.ceil(articles.length / itemsPerPage);
      }
      return 0;
    };

    return (
      <>
        <Items currentItems={currentItems()} />
        <div className="pagenate-container">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={(e) => {
              // Invoke when user click to request another page.
              const { selected } = e;
              const newOffset = () => {
                if (articles) {
                  return (selected * itemsPerPage) % articles.length;
                }
                return 0;
              };
              console.log(
                `User requested page number ${selected}, which is offset ${newOffset}`
              );
              setItemOffset(newOffset());
            }}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount()}
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
        </div>
      </>
    );
  }

  return (
    <Fragment>
      <div id="container">
        <PaginatedItems itemsPerPage={8} />,
      </div>
    </Fragment>
  );
};

export default ArticlesPreview;
