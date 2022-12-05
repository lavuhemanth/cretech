import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/services/frontend.png";


const Frontend = () => {
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
      <Breadcumb Title="Frontend Development" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Frontend Development</h3>
              <div className="service-details__content">
               <p>
                <b>Choose Customized Front end development services and get skilled professional, state-of-art infrastructure and latest technologies. Our applications are robust, fast loading and fully responsive.</b>
               </p>
               <h4>
               Front End Development Services
               </h4>
               <p>
               Sreeson ensures that our front-end development services integrate well with external technologies and other web services. Our front-end developers are highly qualified and experienced to understand the customer's logic and business objectives in order to bring forth smart solutions. Sreeson uses the latest technologies and techniques to develop useful web applications.
               </p>
               <p>
               Sreeson focuses on providing quality service to its customers across the globe. The final product looks great, loads fast and works smoothly. Our front-end developers create interfaces that are loved by the users. Each product is made with great precision to make it look stunning on every possible platform.
               </p>
               <p>
               Sreeson is a recognized and prominent front end development company, team of proficient dextrous and knowledgeable developers that are highly competent to build powerful user friendly interface based on latest technology.
               </p>
               <h3 className="service-details__title">Front-End Frameworks</h3>
               <h4>
                  Angular JS
               </h4>
               <p>
               The developers build data driven web applications using the latest technologies. AngularJS developers at Sreeson help to get customized web applications that are user friendly and provide seamless performance.
               </p>
               <h4>
               React JS
               </h4>
               <p>
               ReactJS has become a preferred JavaScript Framework in today's context. Sreeson has a strong and experienced team of ReactJS developers that offer solutions to challenges and complex issues.
               </p>
               <h4>
                  Knockout JS
               </h4>
               <p>
               Knockout.JS is an architectural design pattern to develop software applications. Knockout.js is a minimalistic JavaScript framework for web application development.
               </p>
               <h4>
               Vue JS
               </h4>
               <p>
               Sreeson uses Vue.JS an open-source JavaScript framework for building user interfaces and single-page applications.
               </p>
               <h4>
               Meteor JS
               </h4>
               <p>
               Developers at Sreeson use Meteor for rapid prototyping and produce cross-platform (Android, iOS, Web) code. They turn your simple web application into a full fledged smartphone application using Meteor.
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

export default Frontend