import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pcgo2ot", // Replace with your service ID
        "template_zzpvzh5", // Replace with your template ID
        e.target, // The form will be passed in automatically
        "0ldKfrls8EE9THcGn" // Replace with your User ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <p className="title-section">Contact Me</p>
      <div className="contact-container">
        <p className="contact-text">
          I'm always open to new opportunities, questions, or just a friendly
          chat! Feel free to reach out to me anytime.
        </p>

        {isSent ? (
          <p className="success-message">
            Thank you for your message! I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
