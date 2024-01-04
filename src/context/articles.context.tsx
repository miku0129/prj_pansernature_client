import { createContext, useEffect, useState, ReactNode } from "react";
// import axios from "axios";

import { dummy_articles } from "./__dummy-article-data__";
const { articles } = dummy_articles;

export const ArticlesContext = createContext<Article[] | any>([]);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articlesArray, setArticlesArray] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      //   const db = await axios.get(
      //     "https://boutique-de-sacs-winter-night-1102.fly.dev/articlesArray"
      //   );

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
