import { renderToString } from "react-dom/server";
import { buildArticle } from "../helper";

describe("buildArticle", () => {
  test("high-light the sentence", () => {
    const paragrash =
      "*La Culture sur Mandala* : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.";

    const result =
      "<p><strong>La Culture sur Mandala</strong> : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.</p>";

    let view = renderToString(buildArticle(paragrash, 1));
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });

  test("high-light the sentence located in the middle", () => {
    const paragrash =
      "Tout d'aboard, *La Culture sur Mandala* : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.";

    const result =
      "<p>Tout d'aboard, <strong>La Culture sur Mandala</strong> : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.</p>";

    let view = renderToString(buildArticle(paragrash, 1));
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });
});
