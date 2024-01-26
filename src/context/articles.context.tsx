import { createContext, useEffect, useState, ReactNode } from "react";
import { getAllDocuments } from "../utilities/firebase/firebase.utils";
import { DocumentData } from "firebase/firestore/lite";

export const ArticlesContext = createContext<Article[] | any>([]);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articlesArray, setArticlesArray] = useState<DocumentData[]>();

  useEffect(() => {
    const getArticles = async () => {
      const articles = await getAllDocuments();
      console.log("articles", articles)
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
