import { Button } from "@msano/prj_msano_lib";
import { use } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStoredDocumentsPromise } from "../utilities/firebase/firebase.utils";
import { buildArticle } from "../utilities/helper";

const Article = () => {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id !== undefined ? +params.id : "";

  const articles = use(getStoredDocumentsPromise);
  const article = (() => {
    if (articles) {
      return (articles as Article[]).find((article) => article.id === id);
    }
  })();

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] p-5">
      <div>
        <h1>{article && article.title}</h1>
        <p>Category: {article && article.category.replace("-", " ")}</p>
        <p>Published date: {article && article.published_date}</p>
        <hr />
      </div>
      <div className="pb-8">
        <div>
          {article &&
            article.text.map(
              (
                paragraph: string | ListOfArticle | ImageOfArticle,
                idx: number,
              ) => buildArticle(paragraph, idx),
            )}
        </div>
        <div className="text-right">
          {article &&
            article.closing.map((signature: string, idx: number) => (
              <p key={idx}>{signature}</p>
            ))}
        </div>
      </div>
      <Button variant="secondary" size="md" onClick={() => navigate(-1)}>
        Retour
      </Button>
    </div>
  );
};

export default Article;
