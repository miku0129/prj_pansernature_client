const buildList = (listItem: string) => {
  if (listItem.includes("*")) {
    const words = listItem.split("*");
    return (
      <li>
        {words.map((word, idx) => {
          if (idx % 2 === 1) {
            return <strong>{word}</strong>;
          } else {
            return <span>{word}</span>;
          }
        })}
      </li>
    );
  } else {
    return <li>{listItem}</li>;
  }
};

export const buildArticle = (paragraph: string | string[]) => {
  if (!Array.isArray(paragraph)) {
    if (paragraph.includes("*")) {
      const sentence = paragraph.split("*");
      return (
        <p>
          {sentence.map((words, idx) => {
            if (idx % 2 === 1) {
              return <strong>{words}</strong>;
            } else {
              return <span>{words}</span>;
            }
          })}
        </p>
      );
    } else {
      return <p>{paragraph}</p>;
    }
  } else {
    return <ul>{paragraph.map((p) => buildList(p))}</ul>;
  }
}
