const buildList = (listItem: string, indexOfListItem: number) => {
  if (listItem.includes("*")) {
    const words = listItem.split("*");
    return (
      <li key={indexOfListItem}>
        {words.map((word, indexOfWord) => {
          if (indexOfWord % 2 === 1) {
            return <strong key={indexOfWord}>{word}</strong>;
          } else {
            return <span key={indexOfWord}>{word}</span>;
          }
        })}
      </li>
    );
  } else {
    return <li key={indexOfListItem}>{listItem}</li>;
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
          {sentence.map((words, indexOfSentence) => {
            if (indexOfSentence % 2 === 1) {
              return <strong key={indexOfSentence}>{words}</strong>;
            } else {
              return <span key={indexOfSentence}>{words}</span>;
            }
          })}
        </p>
      );
    } else {
      return <p key={indexOfParagraph}>{paragraph}</p>;
    }
  } else {
    return <ul key={indexOfParagraph}>{paragraph.map((p, idx) => buildList(p, idx))}</ul>;
  }
};
