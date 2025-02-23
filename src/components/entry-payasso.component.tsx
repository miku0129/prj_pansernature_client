import {
  CustomHeadline,
  CustomArticle,
  CustomBtn,
  CustomLink,
} from "../utilities/components.styles";

import { entryPayassoHeadline, entryPayasoText } from "../asset";

const EntryPayasso = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5">
      <div>
        <CustomHeadline>{entryPayassoHeadline}</CustomHeadline>
        <CustomArticle>{entryPayasoText}</CustomArticle>
      </div>
      <CustomLink to={"/donation"}>
        <CustomBtn>Découvrir</CustomBtn>
      </CustomLink>
    </div>
  );
};

export default EntryPayasso;
