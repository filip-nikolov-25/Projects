import { useState } from "react";

import "./inputSectionContact.css";
import AppContainer from "../base/AppContainer/AppContainer";
import AppSection from "../base/AppSection/AppSection";
import Heading1 from "../base/Heading1/Heading1";

const InputSectionContact = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const textareaRegex = /^.+$/;
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [invalidMail, setInvalidMail] = useState(false);
  const [invalidComment, setInvalidComment] = useState(false);
  return (
    <AppContainer>
      <AppSection>
        <div className="connect-larger-world-container ">
          <div className="left-side">
            <Heading1>connect larger.world</Heading1>
            <p className="connect-under-header">our team always active to support you</p>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (textareaRegex.test(commentInput)) {
                  setInvalidComment(false);
                } else {
                  setInvalidComment(true);
                }
                if (emailRegex.test(emailInput)) {
                  setInvalidMail(false);
                } else {
                  setInvalidMail(true);
                }
                if (textareaRegex.test(commentInput) && emailRegex.test(emailInput)) {
                  alert('Thank you for your message, we will stay in touch!')
                }
              }}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="email adress*"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
              />
              <p style={{ opacity: `${invalidMail ? "1" : "0"}`, margin: "0", marginTop: "-20px", paddingLeft: "15px", color: "red" }}>
                invlid format for your e-mail adress
              </p>
              <div className="name-phone-container">
                <input
                  type="text"
                  placeholder="name"
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="phone"
                  value={phoneInput}
                  onChange={(e) => {
                    setPhoneInput(e.target.value);
                  }}
                />
              </div>
              <p style={{ opacity: "0", margin: "0", marginTop: "-20px", paddingLeft: "10px" }}>invlid</p>
              <textarea
                name=""
                id=""
                placeholder="message*"
                className="text-area"
                value={commentInput}
                onChange={(e) => {
                  setCommentInput(e.target.value);
                }}
              />
              <p style={{ opacity: `${invalidComment ? "1" : "0"}`, margin: "0", marginTop: "-26px", paddingLeft: "15px", color: "red" }}>
                invalid format of your comment
              </p>
              <p>*indicates a required-field</p>
              <div className="agree-holder">
                <input type="checkbox" />
                <p>i agree that larger.world may contact me at the email address or phone number above</p>
              </div>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default InputSectionContact;
