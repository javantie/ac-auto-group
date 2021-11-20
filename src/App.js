import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import How from "./pages/How";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import img_log from "./assets/images/FB_IMG_1575093313783.jpg";

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
              <Link
                to="/"
                className="block p-4 text-yellow-300 font-bold text-xl sm:text-2xl font-serif no-underline"
              >
                AC AUTO BUYERS{" "}
                <i className="fas fa-recycle text-3xl pl-1 text-white animate-spin"></i>
              </Link>

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
              <div className="flex justify-center">
                <img
                  src={img_log}
                  alt="cash-for-junk-car-ac-auto-buyers"
                  className=" rounded-circle h-32 w-32 border-2 border-yellow-400 "
                />
              </div>

              {/* <!-- nav --> */}
              <nav className="font-bold font-serif text-xl">
                <Link
                  to="/"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-400 "
                >
                  Get Offer{" "}
                  <i className="far fa-money-bill-alt pl-5 text-2xl"></i>
                </Link>
                <Link
                  to="/about-us"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-400"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-400"
                >
                  Contact
                </Link>
                <Link
                  to="/how-it-works"
                  className="no-underline block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-400"
                >
                  How it works
                </Link>
              </nav>
            </aside>

            {/* <!-- content --> */}
            <div className="flex-1 md:p-2 p-3">
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
