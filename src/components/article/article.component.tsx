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
  console.log("article", article);

  return (
    article && (
      <ArticleLayout>
        <div>
          <h1>{article.title}</h1>
          <hr />
        </div>
        <div>
          <p>Category: {article.category}</p>
          <p>Published date: {article.published_date}</p>
          <text>{article.text}</text>
        </div>
        <CustomBtn type="button" onClick={() => navigate(-1)}>
          Retour
        </CustomBtn>
      </ArticleLayout>
    )
  );
};

export default Article;