import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
// import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./pages/How";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";
import LeadForm from "./components/LeadForm";
import Testimonials from "./components/Testimonials";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const handleClick = () => {
    // Handle Menu Click
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  return (
    <Router>
      <div id="container" className="">
        <>
          <Banner />
          <div className=" md:flex">
            {/* <!-- mobile menu bar --> */}
            <div className="bg-green-700 text-gray-100 flex justify-between md:hidden">
              {/* <!-- logo --> */}
              <a
                href="#"
                className="block p-4 text-yellow-300 font-bold text-2xl font-serif no-underline"
              >
                AC AUTO BUYERS{" "}
                <i className="fas fa-recycle text-3xl pl-1 text-white animate-spin"></i>
              </a>

              {/* <!-- mobile menu button --> */}
              <button
                id="mobile-menu"
                onClick={handleClick}
                className=" p-4 focus:outline-none focus:bg-green-800"
              >
                <i className="fas fa-bars text-3xl"></i>
              </button>
            </div>

            {/* <!-- sidebar --> */}
            <aside className="sidebar min-h-screen sm:rounded-none rounded-br-lg bg-green-600 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
              {/* <!-- logo --> */}
              <a
                href="#"
                className="text-white flex items-center space-x-2 px-4 no-underline"
              >
                <i className="fas fa-recycle text-3xl pr-1 animate-spin"></i>
                <span className="text-2xl font-extrabold font-serif no-underline text-yellow-500">
                  AC AUTO BUYERS
                </span>
              </a>

              {/* <!-- nav --> */}
              <nav className="font-bold font-serif text-xl">
                <Link
                  to="/"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  Get Offer{" "}
                  <i className="far fa-money-bill-alt pl-5 text-2xl"></i>
                </Link>
                <Link
                  to="/about-us"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  to="/how-it-works"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  How it works
                </Link>
                {/* <a
                  href=""
                  className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  About
                </a> */}
                {/* <a
                  href=""
                  className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  How It Works
                </a>
                <a
                  href=""
                  className="no-underline block py-2.5 px-4 text-white rounded transition duration-200 hover:bg-blue-400 hover:text-white"
                >
                  Contact Us
                </a> */}
              </nav>
            </aside>

            {/* <!-- content --> */}
            <div className="flex-1 md:p-2 p-3">
              {/* <Hero />
            <LeadForm />
            <How />
            <About />
            <Testimonials />
            <ContactForm /> */}
              {/* <ContactPage /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/how-it-works" element={<How />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;
