import axios from "axios";

const highlightWord = (word: string, indexOfWord: number) => {
  if (indexOfWord % 2 === 1) {
    return <strong key={indexOfWord}>{word}</strong>;
  } else if (word !== "") {
    // return <span key={indexOfWord}>{word}</span>;
    return word;
  }
};

const buildList = (
  listItem: string | InnerListOfArticle,
  indexOfListItem: number
) => {
  if (typeof listItem === "string") {
    if (listItem.includes("*")) {
      const words = listItem.split("*");
      return (
        <li key={indexOfListItem}>
          {words.map((word, indexOfWord) => highlightWord(word, indexOfWord))}
        </li>
      );
    } else {
      return <li key={indexOfListItem}>{listItem}</li>;
    }
  } else {
    return (
      <ul>{listItem.list.map((listItem, idx) => buildList(listItem, idx))}</ul>
    );
  }
};

export const buildArticle = (
  paragraph: string | ImageOfArticle | ListOfArticle,
  indexOfParagraph: number
) => {
  if (typeof paragraph === "string") {
    const regexp = new RegExp("https://i.ibb.co/", "i");
    if (regexp.exec(paragraph) === null) {
      if (paragraph.includes("*")) {
        const sentences = paragraph.split("*");
        return (
          <p key={indexOfParagraph}>
            {sentences.map((words, indexOfSentence) =>
              highlightWord(words, indexOfSentence)
            )}
          </p>
        );
      } else {
        return <p key={indexOfParagraph}>{paragraph}</p>;
      }
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={paragraph}
            alt={paragraph}
            style={{ marginTop: "10px", marginBottom: "20px" }}
          />
        </div>
      );
    }
  } else {
    return (
      <ul key={indexOfParagraph}>
        {paragraph.list.map((li, idx) => buildList(li, idx))}
      </ul>
    );
  }
};

export const getPostsFromFacebook = async () => {
  try {
    const res = await axios.get(
      `https://graph.facebook.com/v19.0/${import.meta.env.VITE_PAGE_ID}/feed?fields=id,permalink_url,created_time,message,full_picture,story&access_token=${import.meta.env.VITE_FB_ACCESS_TOKEN}`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
