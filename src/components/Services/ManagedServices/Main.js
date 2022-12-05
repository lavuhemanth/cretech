import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/managed.png";
import ServiceSidebar2 from '../ServiceSidebar2/Main';


const ManagedServices = () => {
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
      <Breadcumb Title="Enterprise Managed IT Services" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Enterprise Managed IT Services</h3>
              <div className="service-details__content">
              <p>
                <b>Extra ordinary management services tailored to meet your needs, from managing your employee endpoints to fully managing your complex IT infrastructure. Focus on what you do best and we take care of the rest.</b>
              </p>
              <h4>
              Enterprise IT Managed Services Provider Company
              </h4>
              <p>
              Sreeson is an IT consulting and managed service providing company. We unlock the business potential by providing end to end IT management services and support for all technologies so that you can remain on the top of your business. Our end-to-end IT management services include expert-level Strategic Consulting, on-site or remote IT Management services, 24x7 remote Help Desk support, Cloud-based tools and technologies, and Information Security solutions. We monitor the business strategy and your services, review all your existing system and help to explore all the business opportunities. We analyze your needs and provide customized solutions for business. We can help you achieve success by aligning your business objectives with our IT management services.
              </p>
              <h4>
              Our Proposition
              </h4>
              <p>
                -Full IT support for your business
              </p>
              <p>
                -Proactive support for your business
              </p>
              <p>
                -Dedicated IT solutions and strategies for business.
              </p>
              <p>
                    -Maintain all exclusive tools and portfolios for your business
              </p>
              <p>
                -nnovative services for maintain and long term optimization.
              </p>
              <h4>
              Our Capabilites
              </h4>
              <p>
                <b>PRODUCT SUPPORT AND MANAGEMENT</b>
              </p>
              <p>
              We ensure that you are always get the best from our product along with best-in-class IT infrastructure support, high quality technical support with access to certified skilled expertise, secure processes and innovative technology support solutions. We constantly monitor your products and help to gather the best valuable recommendation to optimize your system.
              </p>
              <p>
                <b>IT TEAM AUGEMENTATION</b>
              </p>
              <p>
              Our IT staffing services provide the speed, professional acumen and flexibility your team needs to scale quickly and complete development on time. We provide services for every project integrate with your current workflow, our dedicated software engineers are the best option to rapidly build-up a conveniently located, highly qualified and experienced team. Our team handles all your instances so that you can focus on your business.
              </p>
              <p>
                <b>CLOUD SERVICES</b>
              </p>
              <p>
              By providing virtual infrastructure on demand, companies enable IT teams to meet the infrastructure needs of the business more easily and cost-efficiently, scaling quickly while minimizing upfront capital expenses. We help in identifying the area of improvement, invoke robust, repeatable processes leading to future business growth
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
              {/* <div className="row gutter-y-30">
                <div className="col-md-6 col-sm-12">
                  <img
                    src="assets/images/services/service-d-2.jpg"
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
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                    <ul className="service-details__caption__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Praesent efficitur quam sit amet
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Nunc cursus dolor id purus euismod
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Quisque tincidunt eros ac place viverra
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

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
              <ServiceSidebar2/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ManagedServices