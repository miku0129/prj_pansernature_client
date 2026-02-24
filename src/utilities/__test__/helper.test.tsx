import { renderToString } from "react-dom/server";
import { buildArticle} from "../helper";

describe("buildArticle", () => {
  test("high-light the sentence", () => {
    const paragraph =
      "Tout d'aboard, *La Culture sur Mandala* : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.";

    const result =
      "<p>Tout d'aboard, <strong>La Culture sur Mandala</strong> : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.</p>";

    let view = renderToString(buildArticle(paragraph, 1));
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });

  test("create list", () => {
    const paragraph = {
      list: [
        "Ce cercle peut être de deux mètres, jusqu'à cent mètres de diamètre. L'ensemble est recouvert  comme ci-dessus ;",
        "Chaque parcelle ainsi définie est destinée à une culture associée selon la nature des légumes, parce qu'il a été constaté que certains légumes se portent mieux lorsqu'ils sont cultivés à côté d'un autre, cela évite certaines maladies et cela augmente la production.",
      ],
    };
    const result =
      "<ul><li>Ce cercle peut être de deux mètres, jusqu'à cent mètres de diamètre. L'ensemble est recouvert  comme ci-dessus ;</li><li>Chaque parcelle ainsi définie est destinée à une culture associée selon la nature des légumes, parce qu'il a été constaté que certains légumes se portent mieux lorsqu'ils sont cultivés à côté d'un autre, cela évite certaines maladies et cela augmente la production.</li></ul>";

    let view = renderToString(buildArticle(paragraph, 1));
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });

  test("high-light sentence in the list", () => {
    const paragraph = {
      list: [
        "*S'opposer à l'oppression* : Un décret sauvage, publié en catimini, n'est pas une obligation s'il s'oppose aux droits constitutionnels, aux libertés individuelles, à la tradition séculaire de nos ancêtres ;",
        "Cultiver les céréales, les légumes, c'est reproduire les plantes qui étaient naturelles à leur origine, récolter les fruits, dans les vergers ou dans la nature, est une liberté qui ne peut être conditionnée à la volonté du libéralisme sauvage ;",
        "Hippocrate a dit « Que ton aliment soit ton meilleur médicament » ! Depuis la nuit des temps, la tradition, les us et coutumes, ont attribué aux plantes, aux céréales, aux légumes, des vertus médicinales reconnues pour leur efficacité, ce que ni la Médecine, ni la Pharmacie, n'ont jamais contesté. (Faudra-t-il aussi interdire la culture des céréales, des fruits ou des légumes parce qu'ils ont ou auraient des vertus nutritives saines ou médicinales ?)",
      ],
    };

    const result =
      "<ul><li><strong>S'opposer à l'oppression</strong> : Un décret sauvage, publié en catimini, n'est pas une obligation s'il s'oppose aux droits constitutionnels, aux libertés individuelles, à la tradition séculaire de nos ancêtres ;</li><li>Cultiver les céréales, les légumes, c'est reproduire les plantes qui étaient naturelles à leur origine, récolter les fruits, dans les vergers ou dans la nature, est une liberté qui ne peut être conditionnée à la volonté du libéralisme sauvage ;</li><li>Hippocrate a dit « Que ton aliment soit ton meilleur médicament » ! Depuis la nuit des temps, la tradition, les us et coutumes, ont attribué aux plantes, aux céréales, aux légumes, des vertus médicinales reconnues pour leur efficacité, ce que ni la Médecine, ni la Pharmacie, n'ont jamais contesté. (Faudra-t-il aussi interdire la culture des céréales, des fruits ou des légumes parce qu'ils ont ou auraient des vertus nutritives saines ou médicinales ?)</li></ul>";

    let view = renderToString(buildArticle(paragraph, 1));
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });
});
