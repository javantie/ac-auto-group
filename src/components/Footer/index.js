import React from 'react'

function Footer() {
  return (
    <footer className="border-t-2">
        <div className="bg-green-800 text-white font-bold text-md">
            <ul className="flex justify-evenly pr-4">
                <li>Get Offer</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Blog</li>
            </ul>
        </div>
      <div className="footer__content">
        <div className="text-center">
          <p>
            <span className="footer__content__text__copy">
              &copy; {new Date().getFullYear()}
            </span>
            <span className="text-xl font-bold font-serif">
              {' '}
              AC Auto Buyers
            </span>
          </p>
        </div>
        <div className="flex justify-evenly text-3xl mb-2">
          <a href="https://www.facebook.com/acautogroup">   
            <i className="fab fa-facebook-square "></i>
            </a>
            <a href="https://www.instagram.com/acautogroup/">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/ac-auto-group/">
            <i className="fab fa-linkedin"></i>
            </a>
        </div>
        </div>
    </footer>
    )
}
 
export default Footer