import { renderToString } from "react-dom/server";
import { buildArticle, getPostsFromFacebook } from "../helper";
import axios from "axios";

describe("getPostsFromFacebook", () => {
  test("return array", async () => {
    const spy = jest.spyOn(axios, "get").mockImplementation(() => {
      return Promise.resolve({
        data: {
          data: [
            {
              created_time: "2024-05-25T12:42:06+0000",
              full_picture:
                "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/443860777_767183222238246_1540510878972836757_n.jpg?stp=cp1_dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hAPTPq6lT_EQ7kNvgFH-LI0&_nc_ht=scontent-cdg4-1.xx&edm=AKK4YLsEAAAA&oh=00_AYBYi3Prip_thMpnTjXn8_Ird_CVtepQ3h7IZ5x2eqaQXg&oe=66BC2FDE",
              id: "107356491885884_471579245542133",
              permalink_url: "https://www.facebook.com/43172937952",
            },
          ],
        },
      });
    });

    const result = await getPostsFromFacebook();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(result)).toBe(true);
  });
});

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
