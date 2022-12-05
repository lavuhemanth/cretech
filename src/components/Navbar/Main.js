import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/Desktop.png'
import WOW from 'wowjs'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const [sticky, setSticky] = useState(false)
  const [search, setSearch] = useState(false)
  const [menu, setmenu] = useState({})

  const activeMenu = () => {
    if (path === "/" || path === "/home-02" || path === "/home-03") {
      setmenu({ home: true })
    } else if (path === "/about" || path === "/team") {
      setmenu({ pages: true })
    } else if (path === "/service-01" || path === "/service-02" || path === "qa-testing" || path === "/it-management" || path === "cyber-security" || path === "/it-consultant" || path === "/infrastructure-plan") {
      setmenu({ services: true })
    } else if (path === "/projects" || path === "/project-details") {
      setmenu({ project: true })
    } else if (path === "/blog" || path === "/blog-details") {
      setmenu({ blog: true })
    } else if (path === "/contact") {
      setmenu({ contact: true })
    } else {
      setmenu({ home: true })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0)
    new WOW.WOW({
      live: false
    }).init();
    activeMenu()
  }, [path])

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  }

  const navigate = () => {
    window.location.assign("https://calendly.com/sreeson");
  }
  return (
    <>
      <div className="topbar">
        <div className="container-fluid">
          <p className="topbar__text">Welcome to SREESON</p>
          <ul className="topbar__info">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:needhelp@company.com">info@sreeson.ca</Link>
            </li>
            <li>
              <i className="fa fa-map-marker"></i>
              80 Atlantic Avenue, Toronto, ON M6K 1X9, Canada
            </li>
          </ul>
          <ul className="topbar__social">
            <li>
              <Link
                to="#"
                onClick={() =>
                  window.location.assign("https://twitter.com/SreesonCanada")
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
                <i className="fab fa-facebook"></i>
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
                <i class="fa-brands fa-linkedin"></i>
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
      <nav
        className={`main-menu sticky-header ${sticky && "sticky-header--cloned sticky-fixed"
          }`}
      >
        <div className="container-fluid">
          <div className="main-menu__logo">
            <Link to="/">
              <img src={Logo} width="100" height="43" alt="Sreeson" />
            </Link>
          </div>

          <ul className="main-menu__list">
            <li
              className={`menu-item-has-children ${menu.home && "current"}`}
            >
              <Link to="/">Home</Link>
              {/* <ul>
                                <li><Link to="/">Home One</Link></li>
                                <li><Link to="/home-02">Home Two</Link></li>
                                <li><Link to="/home-03">Home Three</Link></li>
                                <li className="menu-item-has-children"><Link to="/">Header Styles</Link>
                                    <ul>
                                        <li><Link to="/">Header One</Link></li>
                                        <li><Link to="/home-02">Header Two</Link></li>
                                        <li><Link to="/home-03">Header Three</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
            </li>
            <li
              className={`menu-item-has-children ${menu.pages && "current"}`}
            >
              <Link to="/about">About Us</Link>
              {/* <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                </ul> */}
            </li>
            <li
              className={`menu-item-has-children ${menu.services && "current"
                }`}
            >
              <Link to="/services">Services</Link>
              <ul>
                {/* <li>
                    <Link to="/service-01">Services 01</Link>
                  </li>
                  <li>
                    <Link to="/service-02">Services 02</Link>
                  </li> */}
                <li>
                  <Link to="">IT and Development</Link>
                  <ul>
                    <li>
                      <Link to="/Webapp">Web Application</Link>
                    </li>
                    <li>
                      <Link to="/mobileapp">Mobile App</Link>
                    </li>
                    <li>
                      <Link to="/frontend">Frontend Development</Link>
                    </li>
                    <li>
                      <Link to="/Clouddev">Cloud & DevOps</Link>
                    </li>
                    <li>
                      <Link to="/Chatbot">Chatbot Development</Link>
                    </li>
                    <li>
                      <Link to="/Bigdata">Big Data</Link>
                    </li>
                    <li>
                      <Link to="/qa-testing">QA & Testing</Link>
                    </li>
                    <li>
                      <Link to="/Cloudintegration">Cloud Integration</Link>
                    </li>
                    <li>
                      <Link to="/ITmerit">IT Metrics And Dashboard </Link>
                    </li>
                    <li>
                      <Link to="/cyber-security">Cyber Security</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/it-consultant">IT Consultant</Link>
                  <ul>
                    <li>
                      <Link to="/hireing">Hire Development</Link>
                    </li>
                    <li>
                      <Link to="/microsoftenterprise">Microsoft </Link>
                    </li>
                    <li>
                      <Link to="/Iot">IOT</Link>
                    </li>
                    <li>
                      <Link to="/Ar">AR/VR</Link>
                    </li>
                    <li>
                      <Link to="/Business">Business / Technology </Link>
                    </li>
                    <li>
                      <Link to="/ProductPrototype">Product Prototype</Link>
                    </li>
                    <li>
                      <Link to="/ManagedServices">Managed Services</Link>
                    </li>
                    <li>
                      <Link to="/Enterprice">Enterprise Mobility</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Processes</Link>
                  <ul>
                    <li>
                      <Link to="/DevelopMethodology">Development Methodology</Link>
                    </li>
                    <li>
                      <Link to="/Delivery">Delivery Models</Link>
                    </li>
                    <li>
                      <Link to="/Pricing">Pricing Models</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link to="/it-management">IT Management</Link>
                </li>
                <li>
                  <Link to="/infrastructure-plan">Infrastructure Plan</Link>
                </li> */}

              </ul>
            </li>

            <li
              className={`menu-item-has-children ${menu.services && "current"
                }`}
            >
              <Link to="/">Industries</Link>
              <ul>
                {/* <li>
                    <Link to="/service-01">Services 01</Link>
                  </li>
                  <li>
                    <Link to="/service-02">Services 02</Link>
                  </li> */}
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

            </li>
            {/* <li
                className={`menu-item-has-children ${
                  menu.project && "current"
                }`}
              >
                <Link to="/projects">Projects</Link>
                <ul>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Projects Details</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${menu.blog && "current"}`}
              >
                <Link to="/blog">Blog</Link>
                <ul>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li> */}
            <li
              className={`menu-item-has-children ${menu.contact && "current"
                }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="main-menu__right">
            <Link to="#" className="mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link
              to="#"
              onClick={() => setSearch(true)}
              className="search-toggler"
            >
              <i className="icon-magnifying-glass"></i>
            </Link>
            <Link to="#" className="main-menu__cta" onClick={navigate}>
              <i className="fa fa-clock"></i>
              <span className="main-menu__cta__text">Schedule a Meeting</span>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className={`search-popup ${search && "active"}`}>
          <div
            className="search-popup__overlay search-toggler"
            onClick={() => setSearch(false)}
          ></div>
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <span>
                  <i className="icon-magnifying-glass"></i>
                </span>
              </button>
            </form>
          </div>
        </div> */}
    </>
  );
}

export default Navbar