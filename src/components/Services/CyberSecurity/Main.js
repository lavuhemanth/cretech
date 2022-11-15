import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import security1 from '../../../assets/images/services/security-1-1.jpg'
import security2 from "../../../assets/images/services/security-1-2.jpg";

const CyberSecurity = () => {

	// const [clicked, setClicked] = useState(0);
	// const faqs = [
	// 	{
	// 		question: "Nulla eu nisi pellentesque, ultrices lorem eget, mattis dolo",
	// 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
	// 	},
	// 	{
	// 		question: "Praesent nec ante sed libero tempus rutrum",
	// 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
	// 	},
	// 	{
	// 		question: "Integer et mi in eros commodo bibendum",
	// 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
	// 	},
	// 	{
	// 		question: "Proin commodo turpis eu leo tempus varius",
	// 		answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
	// 	}
	// ]

	return (
    <>
      <Suspense
        fallback={
          <div class="preloader">
            <div class="preloader__circle"></div>
          </div>
        }
      >
        <Breadcumb Title="Cyber Security" Breadcumb="SERVICES" />
        <section className="section-padding--bottom section-padding--top service-details--page">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="service-details__image">
                  <img src={security1} alt="" />
                </div>
                <h3 className="service-details__title">Cyber Security</h3>
                <div className="service-details__content">
                  <p>
                    CRETECH is a top cyber security company in Bangalore that
                    gives IT security solutions to small businesses,
                    enterprises, and startups. We have years of experience in
                    this industry, and we have assisted plenty of customers in
                    becoming prosperous enterprises.
                  </p>
                  <h4>
                    Protect your data with the latest in encryption technology.
                  </h4>
                  <p>
                    As the world becomes increasingly digitized, it is the duty
                    of every business to protect their data and keep it secure.
                    However, as cyber-attacks and data breaches become more
                    sophisticated, it can be tough to anticipate what dangers
                    might surface in the future. CRETECH is here to help you. We
                    have been managing today's digital landscape for over a
                    decade and know how to maintain the confidentiality of your
                    data against the most up-to-date cyber-threats. We can help
                    you identify potential vulnerabilities and put measures in
                    place to protect your data against future attacks. Contact
                    us today to learn more.
                  </p>
                  <h4>Secure your business with the industry experts</h4>
                  <p>
                    At Security, our team of specialists understands that each
                    customer has unique needs. We provide IT security solutions
                    that are tailor-made to meet your company's size and budget
                    requirements. By working with you to develop a customised
                    solution, we can keep your systems secure, no matter the
                    size of your organization. Our solutions are scalable and
                    can be adjusted to accommodate the changing needs of your
                    business. Contact us today to discuss your IT security needs
                    and find out how we can help you protect your organisation.
                  </p>
                  <h4>We're alwayshere for you, 24/7.</h4>
                  <p>
                    At CRETECH, our team of IT professionals is available 24/7
                    to answer any questions or concerns you may have about your
                    IT systems. We understand that your business needs can
                    change at a moment's notice, and we are here to provide the
                    support you need to keep your systems running smoothly.
                    Whether you need help with a technical issue or are looking
                    for guidance on how to best use your IT resources, our team
                    is here to help. Contact us today to learn more about how we
                    can support your business.
                  </p>
                </div>
                <div className="row gutter-y-30 service-details__box-wrapper">
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__box">
                      <i className="service-details__box__icon icon-consulting"></i>
                      <div className="service-details__box__content">
                        <h3 className="service-details__box__title">
                          <Link to="#">IT Consultant</Link>
                        </h3>
                        <p className="service-details__box__text">
                          If you have any questions or concerns about your IT
                          systems, our team is available 24/7 to help.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__box">
                      <i className="service-details__box__icon icon-chip"></i>
                      <div className="service-details__box__content">
                        <h3 className="service-details__box__title">
                          <Link to="#">IT Specialist</Link>
                        </h3>
                        <p className="service-details__box__text">
                          You can reach us by phone or by filling out the form
                          below, and we'll get back to you as soon as possible.
                          We'll be glad to hear from you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutter-y-30">
                  <div className="col-md-6 col-sm-12">
                    <img
                      src={security2}
                      className="service-details__sub-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details__caption">
                      <h3 className="service-details__caption__title">
                        Our Benefits
                      </h3>
                      {/* <p className="service-details__caption__text">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum.
                      </p> */}
                      <ul className="service-details__caption__list">
                        <li>
                          <i className="fa fa-check-circle"></i>
                          valuable information protection
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Evade loss of crucial data
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Risk mitigation
                        </li>
                        <li>
                          <i className="fa fa-check-circle"></i>
                          Privacy of customer and employee is ensured
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-12">
                    <div
                      className="accrodion-grp service-details__accrodion"
                      data-grp-name="service-details__accrodion-1"
                    >
                      {faqs.map((item, index) => (
                        <div
                          className={`accrodion wow fadeInUp ${
                            index === clicked && "active"
                          }`}
                          key={index}
                          data-wow-delay="0ms"
                        >
                          <div className="accrodion-title">
                            <h4 onClick={() => setClicked(index)}>
                              {item.question}
                              <span className="accrodion-icon"></span>
                            </h4>
                          </div>
                          {index === clicked && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4 sidebar-column">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default CyberSecurity