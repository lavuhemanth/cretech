import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main';
import ip1 from "../../../assets/images/services/ip-1-1.jpg";
import ip2 from "../../../assets/images/services/ip-1-3.png";

const InfrastructurePlan = () => {
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
      <Breadcumb Title="Infrastructure Plan" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={ip1} alt="" />
              </div>
              <h3 className="service-details__title">
                Sustainable Infrastructure for the Future
              </h3>
              <div className="service-details__content">
                <p>
                  Cretech is changing the way we build and maintain our world.
                  We're building a smarter, more sustainable future.
                </p>
                <p>
                  Smart infrastructure is pivotal in crafting a robust and
                  sustainable ecosystem that links the physical and digital
                  worlds. By basing decisions on data and analytics, we enable
                  our customers to make their energy systems and processes in
                  buildings and industries more efficient and sustainable. We
                  join together with our customers to improve the world we live
                  in, day by day, paving the way for a better tomorrow.
                </p>
                <p>
                  Most businesses today recognize that their IT infrastructure
                  is critical to powering applications and business users,
                  creating great customer and employee experiences, and driving
                  overall success. However, many are still using traditional
                  infrastructure models that cannot keep up with the speed of
                  today's transformations. The IT infrastructure must be
                  modernized.
                </p>
                <p>
                  CRETECH can assist you in migrating from a hardware-dependent
                  infrastructure to a more software-defined and intelligent
                  one—one that can take advantage of any opportunity. By working
                  with CRETECH, you can create a more agile, scalable, and
                  cost-effective infrastructure that will support your business
                  now and into the future.
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
                    src={ip2}
                    className="service-details__sub-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="service-details__caption">
                    <h3 className="service-details__caption__title">
                      Our Benefits
                    </h3>
                    <p className="service-details__caption__text">
                      An optimal IT infrastructure
                    </p>
                    <ul className="service-details__caption__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        High-performance storage
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Low-latency networks
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Secure infrastructures
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        WANs
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Virtualization
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Zero downtime
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
    </>
  );
}

export default InfrastructurePlan