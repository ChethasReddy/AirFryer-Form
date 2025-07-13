import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./InterestForm.css";

const formatSecretKey = (value) => {
  const digits = value.replace(/[^\d]/g, "").slice(0, 16);
  const parts = digits.match(/.{1,4}/g);
  return parts ? parts.join("-") : "";
};

const InterestForm = () => {
  const [secretKey, setSecretKey] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cost: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSecretKeyChange = (e) => {
    const formattedKey = formatSecretKey(e.target.value);
    setSecretKey(formattedKey);
    setFormData((prev) => ({ ...prev, secretKey: formattedKey }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", formData);
    if (!formData.secretKey || formData.secretKey.length < 19) {
      toast.error("Please enter a valid 16-digit secret key.");
      return;
    }
    toast.success("🎉 Form submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      cost: "",
      secretKey: "",
    });
    setSecretKey("");
  };

  return (
    <>
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
            <form className="interest-form" onSubmit={handleSubmit}>
              <div className="name-group">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Guess the air fryer’s cost ($ amount)
                <input
                  type="number"
                  name="cost"
                  placeholder="$"
                  value={formData.cost}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Secret Key
                <input
                  type="text"
                  name="secretKey"
                  value={secretKey}
                  onChange={handleSecretKeyChange}
                  placeholder="####-####-####-####"
                  maxLength={19}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default InterestForm;
