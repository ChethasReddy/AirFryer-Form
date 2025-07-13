import React, { useState } from "react";
import "./InterestForm.css";

const formatSecretKey = (value) => {
  return value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1-")
    .slice(0, 19);
};

const InterestForm = () => {
  const [secretKey, setSecretKey] = useState("");

  const handleSecretKeyChange = (e) => {
    setSecretKey(formatSecretKey(e.target.value));
  };

  return (
    <div className="interest-form-wrapper">
      <div className="interest-form-container">
        <div className="interest-form-left">
          <div className="flip-container">
            <div className="flipper">
              <img
                src="/images/airfryer1.png"
                alt="Spidr Airfryer Front"
                className="front"
              />
              <img
                src="/images/airfryer2.webp"
                alt="Spidr Airfryer Back"
                className="back"
              />
            </div>
          </div>
        </div>

        <div className="interest-form-right">
          <h2 className="form-title">Interested in the Airfryer?</h2>
          <form className="interest-form">
            <div className="name-froup">
              <label>
                First Name
                <input type="text" placeholder="John" required />
              </label>
              <label>
                Last Name
                <input type="text" placeholder="Doe" required />
              </label>
            </div>
            <label>
              Phone Number
              <input type="tel" placeholder="123-456-7890" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="example@email.com" required />
            </label>
            <label>
              Guess the air fryer’s cost ($ amount)
              <input type="number" placeholder="$" required />
            </label>
            <label>
              Secret Key
              <input
                type="text"
                value={secretKey}
                onChange={handleSecretKeyChange}
                placeholder="####-####-####-####"
                maxLength={29}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;
