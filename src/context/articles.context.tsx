import { createContext, useEffect, useState, ReactNode } from "react";
import { getAllDocuments } from "../utilities/firebase/firebase.utils";
import { DocumentData } from "firebase/firestore/lite";

// import { dummy_articles } from "./__dummy-article-data__";
// const { articles } = dummy_articles;

export const ArticlesContext = createContext<Article[] | any>([]);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articlesArray, setArticlesArray] = useState<DocumentData[]>();

  useEffect(() => {
    const getArticles = async () => {
      const articles = await getAllDocuments();
      setArticlesArray(articles);
    };

    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={[articlesArray, setArticlesArray]}>
      {children}
    </ArticlesContext.Provider>
  );
};
