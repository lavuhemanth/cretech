import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/services/devops.png";


const Clouddev = () => {
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
      <Breadcumb Title="Cloud - Devops Development Services" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Cloud - Devops Development</h3>
              <div className="service-details__content">
                <p>
                  <b>Get automated real time and natural conversation stimulators with our chabot development services. Build incredible chat bots that help you to communicate and engage with your customers across a wide range of platforms</b>
                </p>
                <h4> Cloud-DevOps Development Services</h4>
                <p>
                  Sreeson provides cloud and DevOps development solutions with industry-best practices and the latest tools available in the market to provide clients with the most efficient solutions aimed at reducing costs, maximizing ROI and simplifying development.
                </p>
                <p>
                  With our experts in the DevOps and Cloud environment, we help you to gain the most from high-performing cloud environments. Amazon Cloud Computing Services allows businesses and large enterprises to experience enhanced security and accelerated performance in applications and tools as well as engineered infrastructure.
                </p>
                <p>
                  Establishment and maintenance of business on Cloud is the best way to expand your business faster and connect the clients to the service representatives. By using cloud consulting and DevOps, your clients can grow closers to the organization. Our company, Sreeson, shall provide you with the field-tested strategies where cloud consulting can be made real. We shall also manage the infrastructure and applications of your online business and business on digital platforms while we explain the procedure to you and your employees.
                </p>
                <h4>
                  DevOps Solutions and Services
                </h4>
                <p>
                  <b>Devops</b>
                </p>
                <p>
                  DevOps is a combination of two words i.e. Developers and Operations. DevOps has been developed to create a culture that may foster collaboration and Integration between the Development & the Operation teams. Our team creates a flexible and agile environment using DevOps to meet business requirements such as streamlined processes and powerful software that are faster and more efficient. Sreeson's DevOps consulting services give rise to a continuous workflow from development to operations to ensure updation of software/ apps as per the latest market trends.
                </p>
                <p>
                  <b>Cloud</b>
                </p>
                <p>
                  Sreeson provides clients with cloud consulting services, cloud application development and cloud application migration services on these platforms. It provides its clients with the ability to shape, wrap, integrate and deploy any application to a multi-tenant or single tenant private cloud computing data centre. Sreeson helps you to reduce the time taken and tests solutions with higher availability. It also helps you to increase the capacity and achieve high-performance computing.
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
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clouddev