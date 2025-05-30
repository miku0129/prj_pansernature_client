import {
  CustomHeadline,
  CustomArticle,
  CustomBtn,
  CustomLink,
} from "../utilities/components.styles";

import { entryHelloAssoHeadline, entryHelloAssoText } from "../asset";

const EntryHelloAsso = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5" id="entry-helloasso">
      <div>
        <CustomHeadline>{entryHelloAssoHeadline}</CustomHeadline>
        <CustomArticle>{entryHelloAssoText}</CustomArticle>
      </div>
      <CustomLink to={"/pay-asso-url"}>
        <CustomBtn>Découvrir</CustomBtn>
      </CustomLink>
    </div>
  );
};

export default EntryHelloAsso;
