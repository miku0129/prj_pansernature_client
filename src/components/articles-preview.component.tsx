import { use, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link, useLocation } from "react-router-dom";
import { getStoredDocumentsPromise } from "../utilities/firebase/firebase.utils";

type CurrentItems = {
  currentItems: Article[];
};
type ItemsPerPage = {
  itemsPerPage: number;
};
type PreviewPropsType = {
  previewtype?: AgriJardin | VieAssociative | DesobeissanceCivile | Sante;
};

export default function ArticlesPreview() {
  const location = useLocation();
  const state = location.state as PreviewPropsType;

  let articles = use(getStoredDocumentsPromise) as Article[];

  if (articles) {
    if (state !== null) {
      if (state.previewtype === "Agri-jardin") {
        articles = articles.filter(
          (article: Article) =>
            article.category.replace("-", " ") === "Agri jardin",
        );
      }
      if (state.previewtype === "Vie-associative") {
        articles = articles.filter(
          (article: Article) =>
            article.category.replace("-", " ") === "Vie associative",
        );
      }
      if (state.previewtype === "Désobéissance-civile") {
        articles = articles.filter(
          (article: Article) =>
            article.category.replace("-", " ") === "Désobéissance civile",
        );
      }
      if (state.previewtype === "Santé") {
        articles = articles.filter(
          (article: Article) => article.category.replace("-", " ") === "Santé",
        );
      }
    }
  }

  //articleの個数がUIに影響する。後でデザイン調整が必要
  if (articles && articles.length % 4 !== 0) {
    let counter = articles.length % 4;
    const empty_article = {
      id: 0,
      title: "",
      category: "",
      published_date: "",
      text: "",
      closing: [""],
    } as unknown as Article;
    while (counter < 4) {
      articles.push(empty_article);
      counter += 1;
    }
  }

  function Items({ currentItems }: CurrentItems) {
    return (
      <div className="items mb-4 flex gap-2">
        <Row xs={1} md={3} lg={4} className="g-4">
          {currentItems &&
            currentItems.map((article, idx) => {
              let text_intro = "";
              if (typeof article.text[0] === "string") {
                text_intro = article.text[0].slice(0, 100).replaceAll("*", "");
              }
              return (
                <Col key={idx} className="flex justify-center">
                  <Link
                    to={`/articles/${article.id}`}
                    className={`no-underline ${
                      article.text ? "hover:opacity-80" : "pointer-events-none"
                    }`}
                  >
                    <Card
                      border="success"
                      className="max-h-64 min-h-64 overflow-hidden"
                      style={{ width: "18rem" }}
                    >
                      <Card.Header>
                        {article.category.replace("-", " ")}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{text_intro}...</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
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
    const getCurrentItems = () => {
      if (articles) {
        return articles.slice(itemOffset, endOffset);
      }
    };
    const currentItems = getCurrentItems();
    const pageCount = () => {
      if (articles) {
        return Math.ceil(articles.length / itemsPerPage);
      }
      return 0;
    };

    return (
      currentItems && (
        <>
          <Items currentItems={currentItems} />
          <div className="flex justify-center">
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
                  `User requested page number ${selected}, which is offset ${newOffset}`,
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
      )
    );
  }

  return (
    <div className="m-4">
      <PaginatedItems itemsPerPage={8} />,
    </div>
  );
}
