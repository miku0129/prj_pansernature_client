import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { init, send } from "@emailjs/browser";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  CustomBtn,
  CustomBtnCancel,
  CustomBtnGroup,
} from "../utilities/components.styles";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // フォームのデフォルトの動作をキャンセル
    e.preventDefault();

    // 必要なIDをそれぞれ環境変数から取得
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      // emailJS初期化
      init(userID);

      // emailJS送信データを定義
      const params = {
        from_first_name: firstName,
        from_last_name: lastName,
        email: email,
        text: text,
      };

      // emailJS送信
      try {
        await send(serviceID, templateID, params);
        alert("Succès de la transmission");
        setFirstName("");
        setLastName("");
        setEmail("");
        setText("");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(error);
      }
    }
  };

  return (
    <div className="p-5">
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formLastname">
            <Form.Label>Nom de famille</Form.Label>
            <Form.Control
              placeholder="Nom de famille"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" xs={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridContents">
          <Form.Label htmlFor="inputForm">Contenu</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Text id="contentHelpBlock" muted>
            Veuillez préciser la nature de votre demande.
          </Form.Text>
        </Form.Group>

        <CustomBtnGroup>
          <div>
            <Link to={"/"}>
              <CustomBtnCancel type="button">Retour</CustomBtnCancel>
            </Link>
          </div>
          <CustomBtn type="submit">Soumettre</CustomBtn>
        </CustomBtnGroup>
      </Form>
    </div>
  );
};

export default Contact;
