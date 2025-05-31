import { Link } from "react-router-dom";

import {
  CustomHeadline,
  CustomArticle,
  CustomBtn,
} from "../utilities/components.styles";

import {
  entryContactBtnLabel,
  entryContactHeadline,
  entryContactText,
} from "../asset";

const EntryContact = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <CustomHeadline>{entryContactHeadline}</CustomHeadline>
        <CustomArticle>{entryContactText}</CustomArticle>
        <Link to={"/contact"}>
          <CustomBtn className="mt-2 mb-2">{entryContactBtnLabel}</CustomBtn>
        </Link>
      </div>
    </div>
  );
};

export default EntryContact;
