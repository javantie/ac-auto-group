import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
// import apikey from "../../keys/apikey";


function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tvsmfye",
        "template_2hrx594",
        e.target,
        "user_2DCiRQIylnJKjcFFvztNv"
      )
      .then((results) => {
        console.log(results);
        alert("Thank you for your message! We will get back to you soon");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later");
      });

    const messageData = { ...state };
    console.log(messageData);
  };

  return (
    <div>
      <div className="border-t-2 mt-4">
        <p className="font-semibold  mt-2">
          <i className="fas fa-envelope-open-text pr-2"></i>Please send us a
          message if you have any qustions or email us at{" "}
          <a href="mailto:gary@acutobuyers.com">gary@acutobuyers.com</a>
        </p>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="border-2 p-2 rounded"
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
            onChange={handleChange}
            required
            value={state.name}
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
            onChange={handleChange}
            placeholder="Enter your email"
            required
            value={state.email}
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
            onChange={handleChange}
            placeholder="Enter your phone"
            required
            value={state.phone}
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
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 p-2 text-3xl font-bold text-white font-serif my-2 rounded-lg hover:bg-blue-300 w-3/6"
          >
            <i className="fas fa-share pr-1"></i> Send
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
