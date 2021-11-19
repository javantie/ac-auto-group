import React from "react";
import emailjs from "emailjs-com";
import apikey from "../../keys/apikey";
import { useState } from "react";

function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [mileage, setMileage] = useState("");
  const [title, setTitle] = useState("");
  const [mechanical, setMechanical] = useState("");
  const [state, setState] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setModel(e.target.value);
  };
  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };
  const handleMileageChange = (e) => {
    setMileage(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleMechanicalChange = (e) => {
    setMechanical(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id ="service_tvsmfye"
    const user_id = "user_2DCiRQIylnJKjcFFvztNv";
    const lead_form_template = "template_fm222p9";
    emailjs
      .sendForm(service_id, lead_form_template, e.target, user_id)
      .then((results) => {
        console.log(results);
        alert("Thank you for your message! We will get back to you soon");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later");
      });
  };

  return (
    <div className="my-4 p-2 rounded-lg shadow-lg leadform ">
      <div>
        <p className="font-bold text-center mt-8 text-2xl font-serif text-yellow-500 animate-pulse">
          Fill out the form below to get a free instant quote.
        </p>
      </div>
      <div className="flex justify-center">
        <form
          action="https://formspree.io/xqgqgwjq"
          method="POST"
          onSubmit={handleSubmit}
          className=" w-5/6"
        >
          <div className="form-group">
            <label htmlFor="name" className="font-bold font-serif text-lg">
              Name
            </label>
            <input
              type="text"
              className="form-control md:opacity-80"
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
              className="form-control md:opacity-80"
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
              className="form-control md:opacity-80"
              id="phone"
              name="phone"
              onChange={handlePhoneChange}
              placeholder="Enter your phone"
              required
              value={phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year" className="font-bold font-serif text-lg">
              Year
            </label>
            <input
              type="year"
              className="form-control md:opacity-80"
              id="year"
              name="year"
              onChange={handleYearChange}
              placeholder="Enter vehicle year"
              required
              value={year}
            />
          </div>
          <div className="form-group">
            <label htmlFor="make" className="font-bold font-serif text-lg">
              Make
            </label>
            <input
              type="make"
              className="form-control md:opacity-80"
              id="make"
              name="make"
              onChange={handleMakeChange}
              placeholder="Enter vehicle make"
              required
              value={make}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="model" className="font-bold font-serif text-lg">
              Model
            </label>
            <input
              type="model"
              className="form-control md:opacity-80"
              id="model"
              name="model"
              onChange={handleModelChange}
              placeholder="Enter vehicle model"
              required
              value={model}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mileage" className="font-bold font-serif text-lg">
              Mileage
            </label>
            <input
              type="mileage"
              className="form-control md:opacity-80"
              id="mileage"
              name="mileage"
              onChange={handleMileageChange}
              placeholder="Enter vehicle mileage"
              required
              value={mileage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode" className="font-bold font-serif text-lg">
              Zip Code
            </label>
            <input
              type="zipcode"
              className="form-control md:opacity-80"
              id="zipcode"
              name="zipcode"
              onChange={handleZipcodeChange}
              placeholder="Enter vehicle zipcode"
              required
              value={zipcode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="font-bold font-serif text-lg">
              State
            </label>
            <input
              type="state"
              className="form-control md:opacity-80"
              id="state"
              name="state"
              onChange={handleStateChange}
              placeholder="Enter vehicle state"
              required
              value={state}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title" className="font-bold font-serif text-lg">
              Title Status
            </label>
            <select
              name="title"
              value={title}
              onChange={handleTitleChange}
              className=" border  my-2  font-serif ml-2 rounded"
              required
            >
              <option value="">Select One</option>
              <option value="Clean Title">Clean Title</option>
              <option value="Salave Title">Salave Title</option>
              <option value="No Title">No Title</option>
              <option value="Registration Only">Registration Only</option>
              <option value="Bill Of Sale">Bill Of Sale</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="mechanical"
              className="font-bold font-serif text-lg"
            >
              Mechanical Status
            </label>
            <select
              name="mechanical"
              value={mechanical}
              onChange={handleMechanicalChange}
              className=" border  my-2  font-serif ml-2 rounded text-center"
            >
              <option value="">Select One</option>
              <option value="Starts & Drive">Starts & Drive</option>
              <option value="Does Not Start">Does Not Start</option>
              <option value="Starts but Don't Drive">
                Starts but Don't Drive
              </option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 p-2 font-bold text-2xl text-white shadow border font-serif mt-2 rounded-lg hover:bg-blue-300 w-4/5"
            >
              <i className="fas fa-paper-plane pr-2"></i>Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeadForm;
