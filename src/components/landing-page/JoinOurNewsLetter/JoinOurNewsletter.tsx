import React, { useState } from "react";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import "./JoinOurNewsletter.css";

const JoinOurNewsletter = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailInput, setEmailInput] = useState("");
  const [invalidMail, setInvalidMail] = useState(false);
  return (
    <AppContainer>
      <AppSection>
        <div className="newsletter">
          <p className="header">join our newsletter</p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              if (emailRegex.test(emailInput)) {
                setInvalidMail(false);
              } else {
                setInvalidMail(true);
              }
              if (emailRegex.test(emailInput)) {
                alert("You just did the right thing, stay tunned for our letters!!!");
              }
            }}
          >
            <p
              style={{
                opacity: `${invalidMail ? "1" : "0"}`,
                margin: "0",
                color: "red",
                marginBottom: "-10px",
                fontSize: "14px",
              }}
            >
              invlid format for your e-mail adress
            </p>
            <input
              type="text"
              placeholder="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
              value={emailInput}
            />
            <p className="sage">your email is safe with us</p>
            <button type="submit">subscribe now</button>
            <div>
              <a href="https://www.linkedin.com/company/larger-world/" target="blank">
                <img src="../../../../public/images/landing-page/newsletter/linkedIn.svg" alt="" />
              </a>
            </div>
          </form>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default JoinOurNewsletter;
