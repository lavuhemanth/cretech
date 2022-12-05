import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import itc from "../../../assets/images/services/price.png";
import ServiceSidebar3 from '../ServiceSidebar3/Main';


const Pricing = () => {
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
      <Breadcumb Title="Pricing Models" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Pricing Models</h3>
              <div className="service-details__content">
                <p>
                  <b>
                    Our pricing model is appropriate for the customers and intervened with overall strategies and business plan and getting right solutions for your financial objectives.
                  </b>
                </p>
                <h4>
                  Explore the different ways by which you can associate with us for reaping maximum benefits
                </h4>
                <p>
                  Our pricing model help in developing the best strategies that support your brand enable you to reach market goals and maximize your profit. Our ultimate goal is to maximize the revenue. We provide the best pricing services that work on three map points cost plus, competitors based and value based.
                </p>
                <p>
                  LOur pricing model help in developing the best strategies that support your brand enable you to reach market goals and maximize your profit. Our ultimate goal is to maximize the revenue. We provide the best pricing services that work on three map points cost plus, competitors based and value based.
                </p>
                <h4>
                  FixedPrice Models
                </h4>
                <p>
                  This model is when there is no whole vision to the final product. One of the biggest uses of this model is in task prioritizing in the project processes. As a result customer can prioritize the order of features and use the on the basis of relevance to the project. It offer high degree of flexibility and material that is most apt for your model.
                </p>
                <h4>
                  Risk Reward Model
                </h4>
                <p>
                  Risk reward pricing model is based on the collaboratively putting all of the organization under one roof. In this an organization and the members associated with the spectrum work deliberately associated with the risk factors. This help in setting of the metric for all stakeholders and they are monitored and supervised jointly.
                </p>
                <h4>
                  Time and Material Model
                </h4>
                <p>
                  This model is when there is no whole vision to the final product. One of the biggest uses of this model is in task prioritizing in the project processes. As a result customer can prioritize the order of features and use the on the basis of relevance to the project. It offer high degree of flexibility and material that is most apt for your model.
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

export default Pricing