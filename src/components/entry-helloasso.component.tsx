import { Button } from "@msano/prj_msano_lib";

import {
  entryHelloAssoHeadline,
  entryHelloAssoText,
  helloAssoLink,
  savoirPlusBtnLavel,
} from "../asset";

const EntryHelloAsso = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <div className="text-4xl">{entryHelloAssoHeadline}</div>
        <div className="text-xl">{entryHelloAssoText}</div>
        <div>
          <a target="_blank" rel="noreferrer" href={helloAssoLink}>
            <Button variant="secondary" size="md" className="mt-2 mb-2">
              {savoirPlusBtnLavel}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EntryHelloAsso;
