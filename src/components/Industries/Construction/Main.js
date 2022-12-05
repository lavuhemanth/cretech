import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
//  import ServiceSidebar from '../../Services/ServiceSidebar/Main'
import itc from "../../../assets/images/industries/construction.jpg";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Construction = () => {
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
            <Breadcumb Title="Construction IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Construction IT Services</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Innovative app and solutions that accelerate the execution of projects, effectively reduce risks and reduce operational loss so that you can focus more on the business.</b>
                                </p>
                                <h4>
                                    IT Solutions for Construction Industry
                                </h4>
                                <p>
                                    Sreeson offer the best solutions and consulting in the field of construction creating best application and technology that help the plan and execution of projects successfully. We help in building of information model that is undoubtedly a greatest advancement within the construction and our incredible 3D model brings all necessary information about the project in one place. We help in removing the problem of contractors and clients working in isolation, and ensure all parties are effectively collaborated.
                                </p>
                                <p>
                                    We provide the robust application, software, cloud applications, web portals and architect, engineer, subcontractors and vendors. We provide the advanced software, construction focused hardware and analytic capabilities that help in reducing the complexity and cost and manage the time efficiency effectively. We help in Design management, Scheduling, Material management, field productivity, equipment management, quality control, document management and safety
                                </p>
                                <p>
                                    We have revolutionized as one of the biggest and fastest growing company indeed across the globe and turn the slowest growing sectors that is the construction sector into one of the most exciting with a steady onslaught of technological wizardry.
                                </p>
                                <h4>
                                    Our Services
                                </h4>
                                <p>
                                    <b>Technology Consulting Services</b>
                                </p>
                                <p>
                                    We provide the detailed view, our tools and technology help in eliminating the problems in the project and develop a road map for the construction projects.
                                </p>
                                <p>
                                    <b>Mobility</b>
                                </p>
                                <p>
                                    We help in boosting efficiency levels, implement real-time information flow, improve inventory management, and facilitate solid decisions that are backed by data. We empower solution for equipment and asset management.
                                </p>
                                <p>
                                    <b>Cloud Services</b>
                                </p>
                                <p>
                                    We gather and analyse the information through past projects and competitor projects, prequalify, evaluate and provide a enhance portfolio and project delivery.
                                </p>
                                <p>
                                    <b>Analytics</b>
                                </p>
                                <p>
                                    We track and mange the construction equipment fleet, identify and support the material chain. We help in the network , support and desktop help desk support.
                                </p>
                                <p>
                                    IT Support and Managed Services
                                </p>
                                <p>
                                    Visualize the drawing and 3D model and update the designs with the annotation and hyperlinks and track the material supply chain through innovative app and software.
                                </p>
                                <h4>
                                    Wearable Solution
                                </h4>
                                <p>
                                    <b>FIELD PRODUCTIVITY</b>
                                </p>
                                <p>
                                    The tools and application that designed to test the skill set of the labors and ensures their proper functioning and project staffing members , designed wearable GPS jackets.
                                </p>
                                <p>
                                    <b>SAFETY ALERTS</b>
                                </p>
                                <p>
                                    It help in reporting and tracking various accidents that occur during accidents and ensure right measure to be taken for the better protection of the labors working there.
                                </p>
                                <p>
                                    <b>DESIGN MANAGEMENT</b>
                                </p>
                                <p>
                                    It help in the better design creation of pdf files that contain the right data and the information necessary for the designs and the sustain the proper accountability.
                                </p>
                                <p>
                                    <b>CONTRACT MANAGEMENT</b>
                                </p> 
                                <p>
                                    The app is specially designed to the customers and clients so that they can easily handle all the communication related dealings and the documentation of the contract between the two parties van be easily maintained.
                                </p>
                                <p>
                                    <b>PERFORMANCE MANAGEMENT</b>
                                </p>
                                <p>
                                    It help in the tracking of the performance of the clients and the customers and provide the best mark up that help in the improvement of their skills set.
                                </p>
                                <p>
                                    <b>DOCUMENT MANAGEMENT</b>
                                </p>
                                <p>
                                    This help in the quickly accessing the documents that are pinned in it and records that need to be quickly accessed.
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
                        Quisque tincidunt eros ac plac <ServiceSidebar />e viverra
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
                            {/* <ServiceSidebar /> */}
                        <IndustriesSideBar/>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Construction