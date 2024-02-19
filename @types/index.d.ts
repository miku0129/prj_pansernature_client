type AgriJardin = "Agri-jardin";
type VieAssociative = "Vie-associative";
type DesobeissanceCivile = "Désobéissance-civile";
type Sante = "Santé";
type Autobiographie = "Autobiographie";

type PreviewTypes = AgriJardin | VieAssociative | DesobeissanceCivile | Sante;

type InnerListOfArticle = {
  list: string[];
};

type ListOfArticle = {
  list: (string | InnerListOfArticle)[];
};

type ImageOfArticle = string;

type Article = {
  id: number;
  title: string;
  category: string;
  published_date: string;
  closing: string[];
  text: (string | ListOfArticle | ImageOfArticle)[];
};
