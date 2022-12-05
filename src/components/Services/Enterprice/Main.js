import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/enterprisemobility.png";
import ServiceSidebar2 from '../ServiceSidebar2/Main';


const EnterPrice = () => {
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
      <Breadcumb Title="Enterprise Mobility" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Enterprise Mobility</h3>
              <div className="service-details__content">
              <p>
                <b>Mobility enterprise services and solutions that provide more affluent and more personalized experience for our customers and we aimed at building highly secure ecosystem. We offer highly differentiated and strong enterprise mobility services and solutions.</b>
              </p>
              <h4>
              Enterprise Mobility Service
              </h4>
              <p>
              Sreeson builds a wealthy knowledge base and expertise of many back-end systems, enabling us to offer differentiated and strong enterprise mobility services and solutions. Enterprise mobility management services can save lots of time, reduce risk to manage your business and we have a bag of tricks to roaring your trade. We are a renowned Enterprise solutions company for a reason, i.e. top notch services, dedicated developer, serving in almost every area. Our team of mobility experts works with your organization to implement custom mobility solutions. On the contrary just gives the improper solution, but we never put the cart before the horse. We are experienced enough to serve in enterprise solution management and ready to give a bespoke solution so enterprise mobility can work for you. We are an enterprise app development company and always ahead of the curve to give all required feature. From managing the entire business we ensure the right enterprise solutions.
              </p>
              <h4>
              Our Proposition
              </h4>
              <p>
                -User experience app
              </p>
              <p>
                -Design and implementation
              </p>
              <p>
                -Scalability
              </p>
              <p>
                -Accelerated Delivery
              </p>
              <p>
                -Enterprise vertical solutions
              </p>
              <h4>
              Our Capabilites
              </h4>
              <p>
                <b>ENTERPRISE MOBILITY CONSULTING</b>
              </p>
              <p>
              We offer the best mobility enterprise applications that facilitate seamless distribution of information to the employees, partners, and clients without entailing security risks. We have a competent team of mobility consultants with rich technological expertise and industry knowledge that makes them capable of delivering the best advice for implementing a successful mobility strategy to take the client's business forward. We give mobility advice on the basis of nature of situation.
              </p>
              <p>
                <b>ENTERPRISE MANAGEMENT</b>
              </p>
              <p>
              Our testing tools that work together to find the correlated results. We prioritize and manage vulnerabilities. We carefully devised full set of visualization metrics that you need the most. We define all security parameters and determine all parameters required for the app.
              </p>
              <p>
                <b>MOBILE DEVICE MANAGEMENT AND DESIGN</b>
              </p>
              <p>
              We define all managing to safeguard business purposes. We help you to monitor your device and help to maintain the security of data. Our team consist of certified experts who understand each and every module of the solution and have extensive hands on experience. Our Mobile device management help to optimize the functionality and security of mobile application network while minimizing cost and downtime. We always stay a of changing device types, policies security and update.
              </p>
              <p>
                <b>APLICATION DEVELOPMENT</b>
              </p>
              <p>
              Our application management services improve the application landscape, resulting in high availability of business applications, ensuring that they are pertinent to the changing business requirements and improving end-user experience. Our compliance-driven approach to application management services mitigates the risks.
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

export default EnterPrice