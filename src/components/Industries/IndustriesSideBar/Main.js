import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../../../assets/images/services/services-s-cta-1-1.jpg'

const IndustriesSideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item sidebar__item--category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category">
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

export default IndustriesSideBar;