import React from "react";
import emailjs from "emailjs-com";
// import apikey from "../../keys/apikey";
import { useState } from "react";

function LeadForm() {
  //set the state of the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    zipcode: "",
    title: "",
    mechanical: "",
    mileage: "",
    state: "",
  });

  //write a function to handle the state change of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle form sunmission for the lead form
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tvsmfye",
        "template_fm222p9",
        e.target,
        "user_2DCiRQIylnJKjcFFvztNv"
      )
      .then(
        (result) => {
          alert("Thank you for your submission! We will contact you shortly");
        },
        (error) => {
          alert("There was an error submitting your form. Please Try Again");
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      year: "",
      make: "",
      model: "",
      zipcode: "",
      title: "",
      mechanical: "",
      mileage: "",
      state: "",
    });
  };

  return (
    <div className="my-4 p-2 rounded-lg shadow-lg leadform ">
      <div>
        <p className="font-bold text-center mt-8 text-2xl font-serif text-yellow-500">
          Fill out the form below to get a free instant quote!
        </p>
      </div>
      <div className="flex justify-center border-2 rounded pb-2">
        <form method="POST" onSubmit={handleSubmit} className=" w-5/6">
          <div className="form-group">
            <label htmlFor="name" className="font-bold font-serif text-lg">
              Name:
            </label>
            <input
              type="text"
              className="form-control md:opacity-80"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-bold font-serif text-lg">
              Email:
            </label>
            <input
              type="email"
              className="form-control md:opacity-80"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="font-bold font-serif text-lg">
              Phone:
            </label>
            <input
              type="text"
              className="form-control md:opacity-80"
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="Enter your phone"
              required
              value={formData.hone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year" className="font-bold font-serif text-lg">
              Year:
            </label>
            <input
              type="year"
              className="form-control md:opacity-80"
              id="year"
              name="year"
              onChange={handleChange}
              placeholder="Enter vehicle year"
              required
              value={formData.year}
            />
          </div>
          <div className="form-group">
            <label htmlFor="make" className="font-bold font-serif text-lg">
              Make:
            </label>
            <input
              type="make"
              className="form-control md:opacity-80"
              id="make"
              name="make"
              onChange={handleChange}
              placeholder="Enter vehicle make"
              required
              value={formData.make}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="model" className="font-bold font-serif text-lg">
              Model:
            </label>
            <input
              type="model"
              className="form-control md:opacity-80"
              id="model"
              name="model"
              onChange={handleChange}
              placeholder="Enter vehicle model"
              required
              value={formData.model}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mileage" className="font-bold font-serif text-lg">
              Mileage:
            </label>
            <input
              type="mileage"
              className="form-control md:opacity-80"
              id="mileage"
              name="mileage"
              onChange={handleChange}
              placeholder="Enter vehicle mileage"
              required
              value={formData.mileage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode" className="font-bold font-serif text-lg">
              Zip Code:
            </label>
            <input
              type="zipcode"
              className="form-control md:opacity-80"
              id="zipcode"
              name="zipcode"
              onChange={handleChange}
              placeholder="Enter vehicle zipcode"
              required
              value={formData.zipcode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="font-bold font-serif text-lg">
              State:
            </label>
            <input
              type="state"
              className="form-control md:opacity-80"
              id="state"
              name="state"
              onChange={handleChange}
              placeholder="Enter vehicle state"
              required
              value={formData.state}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title" className="font-bold font-serif text-lg">
              Title Status:
            </label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              Mechanical Status:
            </label>
            <select
              name="mechanical"
              value={formData.mechanical}
              onChange={handleChange}
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
