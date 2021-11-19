import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import apikey from "../../keys/apikey";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = "service_tvsmfye";
    const user_id = "user_2DCiRQIylnJKjcFFvztNv";
    const contact_form_template = "template_2hrx594";
    emailjs
      .sendForm(service_id, contact_form_template, e.target, user_id)
      .then((results) => {
        console.log(results);
        alert("Thank you for your message! We will get back to you soon");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later");
      });

    const messageData = { name, email, message, phone };
    console.log(messageData);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <div className="border-t-2 mt-4">
        <p className="font-semibold  mt-2">
          <i className="fas fa-envelope-open-text pr-2"></i>Please send us a
          message if you have any qustions or email us at test@gmail.com
        </p>
      </div>
      <form
        // action="https://formspree.io/xqgqgwjq"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name" className="font-bold font-serif text-lg">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleNameChange}
            required
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="font-bold font-serif text-lg">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="font-bold font-serif text-lg">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            onChange={handlePhoneChange}
            placeholder="Enter your phone"
            required
            value={phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="font-bold font-serif text-lg">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            onChange={handleMessageChange}
            rows="3"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 p-2 font-bold text-white font-serif mt-2 rounded-lg hover:bg-blue-300"
        >
          <i className="fas fa-share pr-1"></i> Send
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
