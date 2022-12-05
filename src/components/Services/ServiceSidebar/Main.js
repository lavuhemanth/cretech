import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/images/services/services-s-cta-1-1.jpg'

const ServiceSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item sidebar__item--category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category">
          <li>
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
          </li>
        </ul>
      </div>
      <div className="sidebar__item sidebar__item--cta">
        <div className="sidebar__cta"
          style={{ backgroundImage: `url(${BG})` }}>
          <i className="sidebar__cta__icon icon-phone-ringing"></i>
          <h3 className="sidebar__cta__title">Have Tech Problems
            Contact Now</h3>
          <p className="sidebar__cta__text">Call Anytime <br /><Link to="tel:+1-(246)333-0088">+ 1-
            (246) 333-0088</Link></p>

        </div>
      </div>
      <div className="sidebar__item sidebar__item--btn">
        <Link to="#" className="thm-btn sidebar__btn"><span>Download our flyers</span></Link>
      </div>
    </div>
  )
}

export default ServiceSidebar