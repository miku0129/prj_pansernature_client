import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../utilities/components.styles";
import "./article.styles.scss";

const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>article</h1>
      <CustomBtn type="button" onClick={() => navigate(-1)}>
        Retour
      </CustomBtn>
    </div>
  );
};

export default Article;
