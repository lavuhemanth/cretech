import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/realestate.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const RealEstate = () => {
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
            <Breadcumb Title="Real Estate IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Real Estate IT Services</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Provide the complete real estate facilities, solutions and projects to make the development easier, Right services that ensure the better development of your future.</b>
                                </p>
                                <h4>
                                    IT Solutions for Real Estate Industry
                                </h4>
                                <p>
                                    We offer new technology in terms leading provider in the real estate industry, developing, implementing and programming custom real estate management software and respond to the shifting conditions and seize new technologies responsive designs, automated featured listings, and flexible desktop options, Our real estate professionals can seamlessly automate and open driving instructions and notifications We seamlessly help in transferring data and enable easy data management of real estate.
                                </p>
                                <p>
                                    We connect and provide effective leads and help in property management of the customers. Our AI data reinvent implement automation. We provide the managers that help in lead generation and seize shifting conditions. Our database management system help in putting information and then gathering information and find useful insights that help you I investing at the right place.
                                </p>
                                <p>
                                    Our apps allow agents and managers to easily access the data and maintain a track leads
                                </p>
                                <h4>
                                    Custom Real Estate Software Solutions
                                </h4>
                                <p>
                                    <b>Voice Recognition Software & Mortgage/Repair Calculator</b>
                                </p>
                                <p>
                                    Our calculators quickly measures the repairable parts and then monitor it and calculate the total cost of repairmen and then provide necessary information to the owner regarding that. Our app keeps the benchmark of it.
                                </p>
                                <p>
                                    <b>Listing Services & Online Collaboration Tools</b>
                                </p>
                                <p>
                                    Our domain allow us in establishing and help in collaboration of agents that provide an option for the data security and tech enabled relationship driven model
                                </p>
                                <p>
                                    <b>Location-based App</b>
                                </p>
                                <p>
                                    Our location based app is specially designed to allow clients to buy things and help I comparing the cost and facilities of real estate with different locations. We help in searching the nearest place for our clients. The client can get all the information about the location with this app.
                                </p>
                                <p>
                                    <b>Property Management</b>
                                </p>
                                <p>
                                    We provide the best property management app through which client get all information about the fluctuation in the prices and property best suited according to their budget. The app provides the information to the client about the owner of the property, registry of property and compels the prices with the other property locations. Thus provide the best solution to the client and help them to take right decisions
                                </p>
                                <h4>
                                    Emerging Technology Solutions
                                </h4>
                                <p>
                                    <b>Cloud</b>
                                </p>
                                <p>
                                    It help in the better tracking of clients , customers and help in monitoring all, complex into simpler one . It makes things easier provide real term monitoring and ensure right security.
                                </p>
                                <p>
                                    <b>ANALYTICS</b>
                                </p>
                                <p>
                                    It provide the real term analysis and the demographic graph provide the real term opportunity for the customers in their gathering information’s etc.
                                </p>
                                <p>
                                    <b>AR-VR</b>
                                </p>
                                <p>
                                    It create the immersive experience and offer walkout . It helps in visualizing of the new property and the new insights for your solutions and the project.
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

export default RealEstate