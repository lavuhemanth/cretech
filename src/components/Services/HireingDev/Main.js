import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/services/hireing.png";


const HireingDev = () => {
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
      <Breadcumb Title="Hire Develpoment" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Hire Develpoment</h3>
              <div className="service-details__content">
                <p>
                The importance of delivery excellence cannot be overstated. In today's competitive business environment, companies must be able to rely on their teams to deliver high-quality products and services on time and on budget. That's why hiring a dedicated development team can be a great way to ensure delivery excellence.
                </p>
                <p>
                A dedicated development team will work closely with your company to understand your specific needs and requirements. They will then put together a plan to deliver the best possible results. By working with a dedicated team, you can be sure that your company's delivery goals will be met.
                </p>
                <p>
                Dedicated development teams are an excellent option to..
                </p>
                <p>
                Obtain the necessary technical knowledge for your project.
                </p>
                <p>
                Increase the talent of the internal staff.
                </p>
                <p>
                team up on a new project or update an already one.
                </p>
                <p>
                Get services that are adaptable at a fair price.
                </p>
                <p>
                gain complete managerial authority over devs.
                </p>

                <h4>
                 What are the various models for dedicated teams?
                </h4>
                <p>
                  <b>1.a fully committed team.</b>
                </p>
                <p>
                Utilize the skills of our team to provide end-to-end assistance for testing, product development, and managed IT service tasks. We take a targeted approach and give you the freedom to rearrange the team in accordance with the demands of your project. We use a team size-based monthly payment system that also includes fixed service costs.
                </p>
                <p>
                  <b>2. on-call devoted crew</b>
                </p>
                <p>
                Meet your ongoing and intermittent need for knowledgeable specialists to work together on projects. In order to attain the appropriate team competence to execute your duties, we will build on the experience of your core team. For lengthy projects with shifting requirements, the approach is perfect. Regarding the budget, actual expenses may differ from projections, and monthly payments are made pro rata.
                </p>
                <p>
                  <b>3. devoted maintenance crew</b>
                </p>
                <p>
                To keep up with your product or service's changing efficiency requirements, get help for ongoing maintenance. Teams in charge of maintenance make ensuring that products are delivered with the ability to provide results and are continually enhanced to suit shifting user expectations. Businesses choosing a maintenance team will pay a monthly fee based on the scope of the project and the number of team members.
                </p>
                <h4>
                Where do we work from?
                </h4>
                <p>
                With complete control over your project and operations, Sreeson's Dedicated Development Teams will provide extended team support for your projects on-site, off-site, and offshore in accordance with your unique business needs. Over the course of the engagement, we will also guarantee open communication and close cooperation.
                </p>
                <p>
                  <b>1. On-site, committed team</b>
                </p>
                <p>
                From the beginning, you or the internal project manager will be the direct reporting party for our on-site dedicated support teams, who will operate out of your location and on infrastructure you supply. You'll receive the assistance you require right at your location, maintaining total control over communications, operations, and security.
                </p>
                <p>
                  <b>2. an off-site, committed team</b>
                </p>
                <p>
                Our specialised off-site support staff will operate out of our offices in Kansas and New Jersey and travel to your location as needed. You will have full control over your project because we will give you the infrastructure you need to support communication, project management, and information security.
                </p>
                <p>
                  <b>3. devoted offshore team</b>
                </p>
                <p>
                No matter where you are located, our specialised offshore staff will assist your project from our offshore sites. Your suggestions for a pleasant and safe procedure will guide the selection of the infrastructure needed to enable communication, project management, and information security.
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

export default HireingDev