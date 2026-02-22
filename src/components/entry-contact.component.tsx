import { Button } from "@msano/prj_msano_lib";
import { Link } from "react-router-dom";

import {
  entryContactBtnLabel,
  entryContactHeadline,
  entryContactText,
} from "../asset";

const EntryContact = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <div className="text-4xl">{entryContactHeadline}</div>
        <div className="text-xl">{entryContactText}</div>
        <Link to={"/contact"}>
          <Button variant="secondary" size="md" className="mt-2 mb-2">
            {entryContactBtnLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EntryContact;
