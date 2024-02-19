const highlightWord = (word: string, indexOfWord: number) => {
  if (indexOfWord % 2 === 1) {
    return <strong key={indexOfWord}>{word}</strong>;
  } else {
    return <span key={indexOfWord}>{word}</span>;
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
  paragraph: string | ListOfArticle | ImageOfArticle,
  indexOfParagraph: number
) => {
  if (typeof paragraph === "string") {
    const regexp = new RegExp("https://i.ibb.co/", "i");
    if (regexp.exec(paragraph) === null) {
      if (paragraph.includes("*")) {
        const sentence = paragraph.split("*");
        return (
          <p key={indexOfParagraph}>
            {sentence.map((words, indexOfSentence) =>
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
          <img src={paragraph} alt={paragraph} />
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
