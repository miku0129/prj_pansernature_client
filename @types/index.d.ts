type InnerListOfArticle = {
  list: string[];
};

type ListOfArticle = {
  list: (string | InnerListOfArticle)[];
};

type Article = {
  id: number;
  title: string;
  category: string;
  published_date: string;
  closing: string[];
  text: (string | ListOfArticle)[];
};
