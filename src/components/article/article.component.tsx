import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlesContext } from "../../context/articles.context";
import { CustomBtn } from "../../utilities/components.styles";
import { buildArticle } from "../../utilities/helper";

import { ArticleLayout } from "./article.styles";
import "./article.styles.scss";

const Article = () => {
  const navigate = useNavigate();

  const articles = useContext(ArticlesContext)[0];
  const params = useParams();
  let id = params.id !== undefined ? +params.id : "";
  let article = (() => {
    if (articles) {
      return articles.find((article: Article) => {
        return article.id === id;
      });
    }
  })();

  return (
    <ArticleLayout>
      <div>
        <h1>{article && article.title}</h1>
        <p>Category: {article && article.category}</p>
        <p>Published date: {article && article.published_date}</p>
        <hr />
      </div>
      <div className="article-text-container">
        <div>
          {article &&
            article.text.map((paragraph: string | ListOfArticle, idx: number) =>
              buildArticle(paragraph, idx)
            )}
        </div>
        <div className="closing">
          {article &&
            article.closing.map((signature: string, idx: number) => (
              <p key={idx}>{signature}</p>
            ))}
        </div>
      </div>
      <CustomBtn type="button" onClick={() => navigate(-1)}>
        Retour
      </CustomBtn>
    </ArticleLayout>
  );
};

export default Article;
