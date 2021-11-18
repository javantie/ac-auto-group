import React from "react";

function LeadForm() {
  return (
    <div className="my-4 p-2 rounded-lg shadow-lg">
      <div>
        <p className="font-bold text-center mt-8 text-2xl font-serif text-yellow-500 animate-pulse">
          Fill out the form below to get a free quote.
        </p>
      </div>
      <form
        action="https://formspree.io/xqgqgwjq"
        method="POST"
        // onSubmit={handleSubmit}
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
            // onChange={handleNameChange}
            required
            // value={name}
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
            // onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            // value={email}
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
            // onChange={handlePhoneChange}
            placeholder="Enter your phone"
            required
            // value={phone}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Year</label>
          <input
            type="year"
            className="form-control"
            id="year"
            name="year"
            // onChange={handleEmailChange}
            placeholder="Enter vehicle year"
            required
            // value={year}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Make</label>
          <input
            type="year"
            className="form-control"
            id="year"
            name="year"
            // onChange={handleEmailChange}
            placeholder="Enter vehicle year"
            required
            // value={year}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Model</label>
          <input
            type="year"
            className="form-control"
            id="year"
            name="year"
            // onChange={handleEmailChange}
            placeholder="Enter vehicle year"
            required
            // value={year}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Mileage</label>
          <input
            type="year"
            className="form-control"
            id="year"
            name="year"
            // onChange={handleEmailChange}
            placeholder="Enter vehicle year"
            required
            // value={year}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Zip Code</label>
          <input
            type="year"
            className="form-control"
            id="year"
            name="year"
            // onChange={handleEmailChange}
            placeholder="Enter vehicle year"
            required
            // value={year}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Title Status</label>
          <select className=" border  my-2  font-serif ml-2 rounded">
            <option value="">Clean Title</option>
            <option value="New">Salave Title</option>
            <option value="Used">No Title</option>
            <option value="Used">Registration Only</option>
            <option value="Used">Bill Of Sale</option>
          </select>
        </div>
        <div className="form-group">
          <label
            htmlFor="year"
            className="font-bold font-serif text-lg"
          >Mechanical Status</label>
          <select className=" border  my-2  font-serif ml-2 rounded text-center">
            <option value="">Starts & Drive</option>
            <option value="New">Does Not Start</option>
            <option value="Used">Starts but Don't Drive</option>
          </select>
        </div>


        <button
          type="submit"
          className="bg-blue-600 p-2 font-bold text-white shadow border font-serif mt-2 rounded-lg hover:bg-blue-300"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}

export default LeadForm;