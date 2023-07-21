import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/Desktop.png'
// import emailjs from 'emailjs-com';

const Footer = () => {
  
    const location = useLocation();
    const [footerPadding, setfooterPadding] = useState(false);
    useEffect(() => {
      if(location.pathname === "/" || location.pathname === "/service-01"){
        setfooterPadding(true)
      }else{
        setfooterPadding(false)
      }
    }, [location])
    
    return (
      <>
        <div
          className={`footer-main section-padding--bottom ${
            footerPadding ? "footer-main--top-padding" : "section-padding--top"
          }`}
        >
          <div className="container">
            <div className="row gutter-y-30">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--about">
                  <Link to="/" className="footer-widget__logo">
                    <img src={Logo} width="139" height="70" alt="Sreeson" />
                  </Link>
                  <p className="footer-widget__text">
                    We work with a passion of taking challenges and creating new
                    ones in advertising sector.
                  </p>
                  <ul className="footer-widget__social">
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          window.location.assign(
                            "https://twitter.com/SreesonCanada"
                          )
                        }
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          window.location.assign(
                            "https://www.facebook.com/SreesonCanada/"
                          )
                        }
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          window.location.assign(
                            "https://www.linkedin.com/company/sreeson-canada-inc/"
                          )
                        }
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() =>
                          window.location.assign(
                            "https://www.instagram.com/sreeson_canada/"
                          )
                        }
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--links">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul className="footer-widget__links">
                    <li>
                      <Link to="/cyber-security">Cyber Security</Link>
                    </li>
                    <li>
                      <Link to="/it-management">IT Management</Link>
                    </li>
                    <li>
                      <Link to="/qa-testing">QA & Testing</Link>
                    </li>
                    <li>
                      <Link to="/infrastructure-plan">Infrastructure Plan</Link>
                    </li>
                    <li>
                      <Link to="/it-consultant">IT Consultent</Link>
                    </li>
                    <li>
                      <Link to="/Webapp">Web Application</Link>
                    </li>
                    <li>
                      <Link to="/mobileapp">Mobile App</Link>
                    </li>
                    <li>
                      <Link to="/hireing">Hire Development</Link>
                    </li>
                    <li>
                      <Link to="/microsoftenterprise">Microsoft </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--links">
                  <h3 className="footer-widget__title">Industries</h3>
                  <ul className="footer-widget__links">
                    <li>
                      <Link to="/Healthcare">Healthcare</Link>
                    </li>
                    <li>
                      <Link to="/Education">Education /eLearning</Link>
                    </li>
                    <li>
                      <Link to="/Social">Social Network</Link>
                    </li>
                    <li>
                      <Link to="/Retail">Retail</Link>
                    </li>
                    <li>
                      <Link to="/Manufactur">Manufactring</Link>
                    </li>
                    <li>
                      <Link to="/Ecommerce">eCommerce</Link>
                    </li>
                    <li>
                      <Link to="/Energy">Energy</Link>
                    </li>
                    <li>
                      <Link to="/Travel">Travel & Hospitality</Link>
                    </li>
                    <li>
                      <Link to="/RealEstate">Real Estate </Link>
                    </li>
                    <li>
                      <Link to="/Media">Media & Entertainment</Link>
                    </li>
                    <li>
                      <Link to="/Logistics">Logistics & Distribution</Link>
                    </li>
                    <li>
                      <Link to="/Construction">Construction</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget--contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  <ul className="footer-widget__contact">
                    {/* <li>
                                        <i className="fa fa-phone"></i>
                                        <Link to="tel:+8898006802">+ 88 ( 9800 ) 6802</Link>
                                    </li> */}
                    <li>
                      <i className="fa fa-envelope"></i>
                      <Link to="mailto:needhelp@company.com">
                        info@sreeson.ca
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker-alt"></i>
                      330 5th Avenue SW, Suite 1800, Calgary, T2P 0J4
                      <br />
                      Canada
                    </li>
                  </ul>
                  <div className="footer-widget footer-widget--newsletter">
                    <h3 className="footer-widget__title">Subscribe</h3>
                    <p className="footer-widget__text">
                      Sign up to receive the latest articles
                    </p>

                    <form
                      action="#"
                      className="footer-widget__newsletter mc-form"
                      data-url="ADD_YOUR_MAILCHIMP_FORM_URL_HERE"
                    >
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Your Email"
                      />
                      <button className="thm-btn footer-widget__newsletter__btn">
                        <span>Register</span>
                      </button>
                    </form>
                    <div className="mc-form__response"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Sreeson.
              <span className="dynamic-year"></span> All Rights Reserved
            </p>
          </div>
        </div>
      </>
    );
}

export default Footer