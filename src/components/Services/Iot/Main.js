import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/iot.png";
import ServiceSidebar2 from '../ServiceSidebar2/Main';


const Iot = () => {
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
      <Breadcumb Title="Internet of Things (IoT) Solutions" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Internet of Things (IoT) Solutions</h3>
              <div className="service-details__content">
              <p>
                <b>Build a connected and secure world with Internet of things and getting you ready for connected Future. Our define, build and run offering and IoT solutions cater to organization at different IoT adoption level.</b>
              </p>
              <h4>
              Unleash Innovation with IoT Application Development
              </h4>
              <p>
              Sreeson provides you a safe investment plan to automate your business process, secure important data, improve decision making and cut down any unnecessary expense. Sreeson is ready to unleash the potentials of this powerful technology that will redefine the way we interact with other humans, machines, and devices.
              </p>
              <p>
              IOT has been creating waves that no business in the world can deny or resist. IOT has made its mark in every field and has been improving lives of people across the globe. We combine several trends cloud computing, the growth of connected devices, Big Data, and the increasing importance of mobile apps compared to traditional computing applications.
              </p>
              <p>
              Sreeson offers technologically advanced Internet of Things application, allowing your business to maximize benefits. Sreeson delivers enterprise and Internet of Things applications to support smart initiatives from the diverse industries ranging from security, to home automation, to industrial. IOT can transform business operations and improve lives.
              </p>
              <p>
              We build smart connected products that harness the power of machine learning and advanced analytics to help you become more efficient, provide integrated services to deliver and manage IOT solutions. We build apt IOT solutions that are dependent on the nature of need, and the extensiveness of the enterprise.
              </p>
              <h4>
              Internet Of Things Solutions
              </h4>
              <p>
                <b>Smart Cities</b>
              </p>
              <p>
              To accommodate this new demand on cities, municipalities around the globe are turning to the Internet of Things innovation to enhance their services, reduce costs, and improve communication and interaction. Though the potential is there for IoT to improve nearly every aspect of urban living.Tailor-made, modular end to end solutions combine finely tuned elements across connectivity, platforms, analytics, applications, devices, subsystems and security layers, ensuring the right mix for each city’s needs. IoT has helped smart cities and citizens to deliver digital services.
              </p>
              <p>
                <b>Home Automation</b>
              </p>
              <p>
              Smart homes filled with connected products are loaded with possibilities to make our lives easier, more convenient, and more comfortable. There is no shortage of possibilities for smart home IoT devices as home automation seems to be the wave of the future.The IoT based Home Automation will enable the user to use a Home Automation System based on Internet of Things (IoT). The modern homes are automated through the internet and the home appliances are controlled. It helped the users to control air conditioners lights and other appliances.
              </p>
              <p>
                <b>Energy Monitoring</b>
              </p>
              <p>
              In today's connected world, the energy future will be inexorably linked to Internet of Things (IoT). The need of the hour is an intelligent Energy Management that can contribute towards cutting the costs, improving efficiency, and meeting your energy demands and this can be achieved with the help of IoT. This help in optimization of our resources.
              </p>
              <p>
                <b>Entertainment Automation</b>
              </p>
              <p>
              Smart entertainment solutions allow you to have single control for all entertainment devices of any manufacturers. With the help of IoT we can control all remote based devices from our single mobile application interface. We provide the best entertainment automation solutions to seamlessly control all your devices.
              </p>
              <p>
                <b>Infrastructure Automation</b>
              </p>
              <p>
              The global market for Infrastructure automation in smart cities includes advanced connected streets, smart parking, smart lighting, and other transportation innovations. We resolve the problems related to surveillance and congestion.
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

export default Iot