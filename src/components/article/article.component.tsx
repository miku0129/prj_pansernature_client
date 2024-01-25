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
            article.text.map((paragraph: string | string[]) => {
              if (!Array.isArray(paragraph)) {
                if (paragraph.includes("*")) {
                  const sentence = paragraph.split("*");
                  return (
                    <p>
                      {sentence.map((words, idx) => {
                        if (idx % 2 === 1) {
                          return <strong>{words}</strong>;
                        } else {
                          return <span>{words}</span>;
                        }
                      })}
                    </p>
                  );
                } else {
                  return <p>{paragraph}</p>;
                }
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
            article.closing.map((signature: string) => <p>{signature}</p>)}
        </div>
      </div>
      <CustomBtn type="button" onClick={() => navigate(-1)}>
        Retour
      </CustomBtn>
    </ArticleLayout>
  );
};

export default Article;
