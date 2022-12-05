import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/development methods.png";
import ServiceSidebar3 from '../ServiceSidebar3/Main';


const DevelopMethodology = () => {
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
      <Breadcumb Title="Development Methodology" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Development Methodology</h3>
              <div className="service-details__content">
              <p>
                <b>Our development methodologies provide smooth development and we provide framework that help to structure, plan and control the process of developing an information system. We are crafted to achieve the business goals and deadlines.</b>
               </p>
               <h4>
               Standardizing The Method Of Developing a Software, System or Application
               </h4>
               <p>
               It is very important to choose the development methodologies that work best for the project. Our team uses various methodology technologies to minimize the risks while adding new functionalities. We provide project management processes and business approach that is based on customer need and response. We use hybrid methods that provide flexibility in software development.
               </p>
               <p>
               Our methodology ensures that your changes get incorporated with lowest minimal costs. We use those software development methodologies that provide clear guidelines, predefined roles and best practices to be followed. We provide and guide you that software that is best for our customer. We have refined our business process by blending leading industry practices spanning from more agile methodologies, we ensure that we neither overlaps nor conflict at delivering terms.
               </p>
               <p>
               Successful distributed development help leads to improve business agility and provide greater capacity to handle the pressure of competitions.
               </p>
               <h4>
               Methodlogies
               </h4>
               <p>
                <b>Choose the best methodologies best suited for you projects that match your expectations.</b>
               </p>
               <p>
                <b>Agile</b>
               </p>
               <p>
               Agile is the ability to create and respond to changes. It helps in collaboration between self organizing and principles that help in figure out right solutions.Agile software development, focus on the practices that help the organization to solve unresolved issues.
               </p>
               <p>
                <b>Waterfall</b>
               </p>
               <p>
               Waterfall model provide sequential, linear approach to software development methodologies. Waterfall model emphasize the logical progression of steps be taken through software development.
               </p>
               <p>
                <b>Spiral</b>
               </p>
               <p>
               Software development model to handle risk factors and dynamically determine the number of phases involved in project. Spiral model is highly advanced model that has four quadrants gather the customer information analyze every field.
               </p>
               <p>
                <b>Scrum</b>
               </p>
               <p>
               Scrum methodologies is technology for managing software delivery that provide lightweight processes and a series of sprint that potentially deliverable.
               </p>
               <p>
                <b>Iterative</b>
               </p>
               <p>
               It is breaking down the large technologies into chunk of technologies and each code executes iteratively at each steps. At the end of each iterative cycle the final code is revised by the customers.
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
              <ServiceSidebar3/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DevelopMethodology