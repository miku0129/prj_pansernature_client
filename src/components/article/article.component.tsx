import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlesContext } from "../../context/articles.context";
import { CustomBtn } from "../../utilities/components.styles";

import { ArticleLayout } from "./article.styles";
import "./article.styles.scss";

const Article = () => {
  const navigate = useNavigate();

  const articles = useContext(ArticlesContext)[0];
  const params = useParams();
  let id = params.id !== undefined ? +params.id : "";
  let article = articles.find((article: Article) => {
    return article.id === id;
  });

  return (
    <ArticleLayout>
      <div>
        <h1>{article.title}</h1>
        <p>Category: {article.category}</p>
        <p>Published date: {article.published_date}</p>
        <hr />
      </div>
      <div className="article-text-container">
        <div>
          {article &&
            article.text &&
            article.text.map((paragraph: (string | string[])[]) => {
              if (typeof paragraph === "string") {
                return <p>{paragraph}</p>;
              } else {
                return (
                  <ul>
                    {paragraph.map((p) => {
                      return <li>{p}</li>;
                    })}
                  </ul>
                );
              }
            })}
        </div>
        <div className="closing">
          {article &&
            article.closing &&
            article.closing.map((paragraph: string) => <p>{paragraph}</p>)}
        </div>
      </div>
      <CustomBtn type="button" onClick={() => navigate(-1)}>
        Retour
      </CustomBtn>
    </ArticleLayout>
  );
};

export default Article;
