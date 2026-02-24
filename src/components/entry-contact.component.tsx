import { Button } from "@msano/prj_msano_lib";
import { Link } from "react-router-dom";

import {
  entryContactBtnLabel,
  entryContactHeadline,
  entryContactText,
} from "../asset";

export default function EntryContact() {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <div className="mb-3 text-4xl">{entryContactHeadline}</div>
        <p className="text-xl">{entryContactText}</p>
        <Link to={"/contact"}>
          <Button variant="secondary" size="md" className="mt-1 mb-2">
            {entryContactBtnLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
