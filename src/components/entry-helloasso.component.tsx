import {
  entryHelloAssoHeadline,
  entryHelloAssoText,
  helloAssoLink,
  savoirPlusBtnLavel,
} from "../asset";

export default function EntryHelloAsso() {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <div className="mb-3 text-4xl">{entryHelloAssoHeadline}</div>
        <p className="text-xl">
          {entryHelloAssoText}
          <span> 🐝</span>
        </p>
        <div>
          <a target="_blank" rel="noreferrer" href={helloAssoLink}>
            <p className="text-xl">{savoirPlusBtnLavel}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
