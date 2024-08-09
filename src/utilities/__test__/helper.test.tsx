import { renderToString } from 'react-dom/server';
import { buildArticle } from "../helper";

describe("buildArticle", () => {

  const paragrash =
    "*La Culture sur Mandala* : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.";

  const result =
    "<p><span></span><strong>La Culture sur Mandala</strong><span> : c'est un cercle divisé comme on le fait pour les parts d'un gâteau.</span></p>";

  test("create html code from string", () => {  
    let view = renderToString(buildArticle(paragrash, 1))
    expect(view.replaceAll("&#x27;", "'")).toBe(result);
  });
});
