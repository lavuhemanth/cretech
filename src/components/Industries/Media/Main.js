import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/media.png";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Media = () => {
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
            <Breadcumb Title="Entertainment IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Entertainment IT Services</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Our agile and open platform model provide scalable growth and the leading communication and media, help in digital transformation, provide unstoppable communication services with immense customer experience. Our communications & Media consulting team helps you seize the opportunity to invest cost saving to fuel future growth.</b>
                                </p>
                                <h4>
                                    Media and Entertainment Solutions
                                </h4>
                                <p>
                                    Since entertainment play a very important role. Our team of experts can help you with financial forecasting, finance transformation, project management, revenue recognition and supply chain management. With digital media being delivered across new mediums, intellectual property disputes and risk management and created a new level in entertainment.
                                </p>
                                <p>
                                    We have aligned the issues in this sector and analyze the client needs and optimize it. Our solutions helped in the digital advertisement, video platforms and creating spaces. We have transformed the entertainment world with our innovative technology.
                                </p>
                                <p>
                                    Being passionate we are potent combination of knowledge, grit passion and generate huge asset for the entertainment industry. We have flexible skills of knowledge and the experience and deep expertise that allow us to work in more complex environment.
                                </p>
                                <h4>
                                    Our Segments
                                </h4>
                                <p>
                                    We have developed various applications and software that help in developing the best fun entertaining games and turn impossible into possible.
                                </p>
                                <h4>
                                    Custom Entertainment Solutions
                                </h4>
                                <p>
                                    <b>
                                        APPLICATION DEVELOPMENT
                                    </b>
                                </p>
                                <p>
                                    It help in development of live streaming projects , updates efficient iot endpoints and multimedia distribution , designed to give the best gaming , fun entertainment to the end users.
                                </p>
                                <p>
                                    <b>CLOUD SERVICES</b>
                                </p>
                                <p>
                                    It help in the content providing ,gaming part, ISV that accelerate the growth of the entertainment industry and the services that directly connected to it.
                                </p>
                                <p>
                                    <b>MEDIA STREAMING</b>
                                </p>
                                <p>
                                    It help in the reduction of all the risk and maintain the security that take place and ensure the right workflow of things.
                                </p>
                                <p>
                                    <b>AR-VR</b>
                                </p>
                                <p>
                                    It help in providing of the better solutions and generate the unparallel experience through out the process. It include overlaid data and the mission in the development should be right to the models.
                                </p>
                                <p>
                                    <b>CONSUMER ANALYTICS</b>
                                </p>
                                <p>
                                    It provide the right analytics done in the efficient manner and adjust according to the users experience.
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

export default Media