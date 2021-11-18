import React from "react";
import Hero from "../Hero";
import How from "../../pages/How";
import About from "../../pages/About";
import ContactForm from "../ContactForm";
import LeadForm from "../LeadForm";

function Content() {
  return (
    <div className="">
      <Hero />
      <LeadForm />
      <How />
      <About />
      <ContactForm />
    </div>
  );
}

export default Content;
