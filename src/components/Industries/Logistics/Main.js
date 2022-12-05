import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/logistics.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Logistics = () => {
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
            <Breadcumb Title="Logistics IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Logistics IT Services</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Better and faster solutions help in transformation global supply chain, leverages with the real time visibility improving productivity and operational efficiencies and achieve better targets with our latest technology.</b>
                                </p>
                                <h4>
                                    Logistics Management System
                                </h4>
                                <p>
                                    Sreeson helps in movement of freight and goods managing the costs, security and fuel tracking, environmental compliance, some of the major challenges that logistics industry is facing currently. We are expertise in the logistic services and consulting over many years globally. We understand the complexities and challenges that exits in the logistic and connect seamlessly across help in extracting the data effectively in order to achieve the excellence across the supply chain.
                                </p>
                                <p>
                                    Our user-friendly interface reduces the amount of work by eliminating the duplicate data and empowers you to track the field agent movements, track delivery and other field workforce in a single minute a single map. Our logistic and management software provide seamless experience for your operations and field workforce management supervisions
                                </p>
                                <p>
                                    Our solutions help multiple logistic partner to pull together to one platform and reduces their complexity operational costs,increase profitability and tremendous growth.
                                </p>
                                <h4>
                                    Our Services
                                </h4>
                                <p>
                                    <b>Fleet and Driver Management</b>
                                </p>
                                <p>
                                    Fleet management provides a single integrated platform to plan, execute and track field movement to the final customer delivery. Our application help in the monitoring and managing of trips and the tracking of the vehicles like cars, trucks and the other vehicles. Our application provide the driver incentive management and equipment maintenance management.
                                </p>
                                <p>
                                    <b>Transportation Management</b>
                                </p>
                                <p>
                                    Transportation management plays a very important role in the company supply chain management and their ability to compete and profitable. Our app is designed to utilize the both aspects in the most effective and efficient ways are reaping the benefits of the lower costs and transportation agility and structural competitive advantages.
                                </p>
                                <p>
                                    <b>Warehousing & Distribution</b>
                                </p>
                                <p>
                                    Since warehousing is placing the goods and materials in a definite planned space. It is very important for the preservation and security. Our app is designed to monitor and track and prevent the damage, accidents and wrong quantities.
                                </p>
                                <p>
                                    <b>Cargo Management Systems</b>
                                </p>
                                <p>
                                    Cargo management is the total transportation and management capable of taking all the challenges on a global scale and focused on customer contact, confidence and satisfaction.
                                </p>
                                <p>
                                    <b>GPS Vehicle Tracking Apps</b>
                                </p>
                                <p>
                                    The GPS is tracking app is built to track the vehicle and workforces smartly with your phones. It helps in tracking of the exact location and use the system to track the routes of vehicle and monitor progress.
                                </p>
                                <p>
                                    <b>Real-time Planning of vehicles</b>
                                </p>
                                <p>
                                    Vehicle tracking system combine with fleet data that help in taking comphresive pictures of vehicles.
                                </p>
                                <p>
                                    <b>Consignment Tracking Modules</b>
                                </p>
                                <p>
                                    Consignment tracking vehicle help in real time monitoring of their vehicle through their phone and RF application and desktop application.
                                </p>
                                <h4>
                                    Our Solution
                                </h4>
                                <p>
                                    <b>MOBILITY SOLUTIONS</b>
                                </p>
                                <p>
                                    Designed to add the functionalities of the flexibility, easy mobility and tracking and develop the sustainable chain of the process and provide impeachable mobile solutions.
                                </p>
                                <p>
                                    <b>Big Data</b>
                                </p>
                                <p>
                                    Tools and operations that perform the freight shipping and the logistics , It help in better transportation of the goods and ensure the right monitoring and sustainable growth.
                                </p>
                                <p>
                                    <b>Cloud</b>
                                </p>
                                <p>
                                    The technology specially designed to provide the best solutions through out the data input and the loading , It ensure the right mechanism to be followed through out the process.
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
                            {/* <ServiceSidebar /> */}
                            <IndustriesSideBar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logistics