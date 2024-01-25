const highlightWord = (word: string, indexOfWord: number) => {
  if (indexOfWord % 2 === 1) {
    return <strong key={indexOfWord}>{word}</strong>;
  } else {
    return <span key={indexOfWord}>{word}</span>;
  }
};

const buildList = (listItem: string, indexOfListItem: number) => {
  if (!Array.isArray(listItem)) {
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
    return <ul>{listItem.map((item, idx) => buildList(item, idx))}</ul>;
  }
};

export const buildArticle = (
  paragraph: string | string[],
  indexOfParagraph: number
) => {
  if (!Array.isArray(paragraph)) {
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
      <ul key={indexOfParagraph}>
        {paragraph.map((pgh, idx) => buildList(pgh, idx))}
      </ul>
    );
  }
};
