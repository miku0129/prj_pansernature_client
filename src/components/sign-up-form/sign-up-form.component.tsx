import { useState } from "react";

import FormInput from "../form-input/form-input.component";
// import Button from "../button/button.component";
import { CustomBtn } from "../../utilities/components.styles";

import { createAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// import { SignupContainer } from "./sign-up-form.styles";
import "./sign-up-form.styles.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [field, setField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = field;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        const res = await createAuthUserWithEmailAndPassword(email, password);
        console.log("res", res!.user);
        //ユーザー情報をdbに登録する
        // await createUserDocumentFromAuth(user, { displayName });

        setField(defaultFormField); //フォームを初期化
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    <div className="signup-container">
      <h2>Don't have an accont?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChanges,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChanges,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="passowrd"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="confirmPassword"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <CustomBtn>Sign up</CustomBtn>
      </form>
    </div>
  );
};

export default SignUpForm;
