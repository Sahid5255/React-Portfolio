import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your email service / API endpoint
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact">
      <div className="contact__heading">
        <h2>
          I'm always interested in hearing about new projects, so if you'd
          like to chat please get in touch.
        </h2>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="contact__input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="contact__input"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="contact__input contact__input--full"
        />

        <textarea
          name="message"
          placeholder="Write me something..."
          value={formData.message}
          onChange={handleChange}
          className="contact__textarea"
          rows={5}
        />

        <button type="submit" className="btn-primary">
          Get in touch
        </button>
      </form>
    </section>
  );
}