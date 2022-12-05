import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/social.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Social = () => {
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
            <Breadcumb Title="Social Networking IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Social Networking App Development</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Custom social apps designed to share more views and posts accross the globe.</b>
                                </p>
                                <p>
                                    Sreeson provide the best intitutive app that help in the development and generate more leads . Custom social apps that can handle all businesses of all sizes to reach prospects and customers. Your customers are already interacting with brands and our marketing helps in creating and sharing content on social media networks in order to achieve your marketing and branding goals.
                                </p>
                                <p>
                                    We make it easy to spread the word about your products and mission and your audience looking at your brand even when they aren’t thinking about your brand or product. We are specialized in the custom social apps development that matches the specifications and preferences.
                                </p>
                                <p>
                                    ROI web applications development that expand your conversion to the wide range of the customers.
                                </p>
                                <h4>
                                    Social Networking Solutions
                                </h4>
                                <p>
                                    <b>Custom Social Networking</b>
                                </p>
                                <p>
                                    We are global leaders in building white label niche social networks and in creating custom applications for interest groups and settle for anything but the best social media app developers out there. We help in capitalizing and review the audience to the social integration commerce.
                                </p>
                                <p>
                                    <b>Social Network Analytics Tool</b>
                                </p>
                                <p>
                                    Our Social media analytics is the process of gathering and analysing data from social networks such as Facebook, Instagram, and twitter .and help in tracking online conversations about products and companies.
                                </p>
                                <p>
                                    <b>Facebook Apps Development</b>
                                </p>
                                <p>
                                    Our Facebook app development help to reach clients at a faster rate , cover the wide range of people and the application effortlessly.
                                </p>
                                <p>
                                    <b>Messaging Apps</b>
                                </p>
                                <p>
                                    Messaging app development and provide the customized solutions to various platforms and help to integrate in the multiple environment.
                                </p>
                                <p>
                                    <b>Video-based Networks</b>
                                </p>
                                <p>
                                    This network is designed to create and publish small videos and then help in leading ads that help you in the business.
                                </p>
                                <p>
                                    <b>Social Publishing Platforms</b>
                                </p>
                                <p>
                                    Social Publishing platforms help in publishing of the content to various social platforms provide the bloggers the immense opportunity to post everything on social media
                                </p>
                                <p>
                                    <b>Online Polling & Reviews</b>
                                </p>
                                <p>
                                    Develop and gather online apps and that app is designed to take the necessary information from various geo locations.
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

export default Social