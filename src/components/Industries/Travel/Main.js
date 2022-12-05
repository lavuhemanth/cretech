import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/travel.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Travel = () => {
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
            <Breadcumb Title="Travel & Hospitality IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Travel & Hospitality IT Services</h3>
                            <div className="service-details__content">
                                <p>
                                    Hotel and Travel solutions across multichannel make them more agile and empower them with the modernize technology that make them more volatile and their operational growth exponential.
                                </p>
                                <h4>Travel Industry Software Solutions</h4>
                                <p>
                                    We deliver digital transformation and technology solutions and services that expect to be responded in a real time. We posses strong understanding and dedicated leadership groups and we provide solutions and services in Airline, hotel reservation, cruise tour and logistic planning. We understand that good experiences are central to a memorable holiday or business trip and hence we focus on customer journey mapping and experience. We work across air transport, lodging and recreation and leisure harness next generation technologies elevate customer experience and loyalty.
                                </p>
                                <p>
                                    Our compressive approach reduces business risks and accelerates the travel and create unprecedented. In terms customer satisfaction and personalized experiences Our travel solutions help in advancement in the travel brands and provide the holistic view that accurately fulfilling their offerings. We supported innovative and a technical hub and we create the integration system that connect all the websites with us and accelerate context based offers.
                                </p>
                                <p>
                                    We offer travel record and increase efficiencies with our Iot, data science, Ai and Social Computing.
                                </p>
                                <h4>
                                    Hospitality IT Solutions
                                </h4>
                                <p>
                                    -Online booking solution
                                </p>
                                <p>
                                    -Taxi Booking Apps
                                </p>
                                <p>
                                    -Hospitality Operation Management
                                </p>
                                <p>
                                    -Navigation Apps
                                </p>
                                <h4>
                                    Emerging Technology Solutions
                                </h4>
                                <p>
                                    <b>AR VR</b>
                                </p>
                                <p>
                                    It help in taking the right decisions to the customers and provide end term virtual environment and provide the travel solutions show travellers cabins in advance to increase ticket sales.
                                </p>
                                <p>
                                    <b> AI</b>
                                </p>
                                <p>
                                    It help in the treatment of the customers to the various hotels and help in providing the right solutions to their customers and the travel and the migration related problems.
                                </p>
                                <p>
                                    <b>IOT</b>
                                </p>
                                <p>
                                    It contain the tables that contain the virtual data and provide the reactions to the various data and the information.
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
              </div> */}                            {/* <ServiceSidebar /> */}

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

export default Travel