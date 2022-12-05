import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/delivery1.jpg";
import ServiceSidebar3 from '../ServiceSidebar3/Main';


const Delivery = () => {
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
      <Breadcumb Title="Delivery Models" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Delivery Models</h3>
              <div className="service-details__content">
             <p>
              <b>We use both the interface design that help to define how users will interact to the end users. We use the approach that helps in building user centric interfaces with a meticulous examination of use cases.</b>
             </p>
             <h4>
             Choose the delivery model that best suits your business needs
             </h4>
             <p>
             We use both the interface design that help to define how users will interact to the end users. We use the approach that helps in building user centric interfaces with a meticulous examination of use cases.
             </p>
             <p>
             We use both the interface design that help to define how users will interact to the end users. We use the approach that helps in building user centric interfaces with a meticulous examination of use cases
             </p>
             <p>
             Our robust technology enhances the communication, better visibility and diverse infrastructure to ensure the right solutions for business.
             </p>
             <h4>
             Offsite Delivery Model
             </h4>
             <p>
             We provides the right solution through offsite delivery model and provides constant support to local needs. This model absorbs all the random changes in the market place and is designed to set the requirements needed when there is a change in the marketplace.
             </p>
             <h4>
             Offshore Delivery Model
             </h4>
             <p>
             In order to ensure smooth delivery all the entire project execution till final delivery is done by offshore teams. A jointly identify teams allows the clients full transparency, access and control on the team to ensure they can allocate, get status, do changes at short notices.
             </p>
             <h4>
             Hybrid Delivery Model
             </h4>
             <p>
             A hybrid delivery model is featured model that comprises both the offsite and onsite delivery. This model determine how internal and external deliveries can be structured and monitored with this model. It promotes high standardization using technology neural services delivery.
             </p>
             <h4>
             Onsite Delivery Model
             </h4>
             <p>
             Our onsite delivery model ensures a perfect match for each of your needs. Depending on your requirements.With onsite delivery model, clients can get full support and flexible caters to your resourcing requirements based on your changing needs.
             </p>
             <h4>
             Global Delivery Model
             </h4>
             <p>
             Global delivery model help in providing the benefits across the globe and help to drive down the costs and provide local resources to deliver the required success. It provides flexible option to the resources, decrease the risk and increase the productivity.
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

export default Delivery