import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main';
import it1 from "../../../assets/images/services/itmang-1-1.jpg";
import it2 from "../../../assets/images/services/itmang-1-2.jpg";

const ITManagement = () => {
  // const [clicked, setClicked] = useState(0);
  // const faqs = [
  //   {
  //     question: "Nulla eu nisi pellentesque, ultrices lorem eget, mattis dolo",
  //     answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
  //   },
  //   {
  //     question: "Praesent nec ante sed libero tempus rutrum",
  //     answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
  //   },
  //   {
  //     question: "Integer et mi in eros commodo bibendum",
  //     answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
  //   },
  //   {
  //     question: "Proin commodo turpis eu leo tempus varius",
  //     answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat. Vivamus vel eros vitae estaliquet pellentesque vitae."
  //   }
  // ]
  return (
    <>
      <Breadcumb Title="IT Management" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={it1} alt="" />
              </div>
              <h3 className="service-details__title">
                CREATE HIGH-VELOCITY SERVICE IT MANAGEMENT WITH SREESON
              </h3>
              <div className="service-details__content">
                <p>
                  SREESON Service Management provides the tools you need to
                  manage your service organization and unlock high-velocity
                  teams. Improve customer satisfaction, increase efficiency, and
                  reduce costs.
                </p>
                <p>
                  Empower Dev, IT Ops, and business teams to work together
                  quickly and effectively. Respond to changes rapidly to deliver
                  excellent customer and employee experiences. Headline:
                  SREESON: The Best Managed IT Services Providers Are you
                  looking for a reliable and experienced managed IT services
                  provider? Look no further than SREESON. We offer comprehensive
                  services that are designed to meet your unique needs.
                </p>
                <p>
                  Managed IT services providers offer comprehensive oversight
                  into another organization's entire IT operations. This
                  includes IT professional services, consistent monitoring,
                  on-demand IT support, and problem resolution. These services
                  offer more robust support than traditional IT professional
                  services, as they also provide IT implementation and
                  consulting services. Organizations often use managed IT
                  services to reduce IT management risk and provide support
                  during workplace technological disruptions. Managed IT
                  services can be implemented alongside other IT support
                  services such as IT outsourcing services, IT infrastructure
                  consulting providers, and IT strategy consulting providers.
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
              <div className="row gutter-y-30">
                <div className="col-md-6 col-sm-12">
                  <img
                    src={it2}
                    className="service-details__sub-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="service-details__caption">
                    <h3 className="service-details__caption__title">
                      Our Benefits
                    </h3>
                    {/* <p className="service-details__caption__text">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p> */}
                    <ul className="service-details__caption__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Efficiency
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Reduce Operational Costs
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Risk-Free Implementation of IT Changes
                      </li>

                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Accountability Through Standardization
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Accountability within Business Functions
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Effectiveness
                      </li>

                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Visibility into Operations
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Improve Visibility into Performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

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

export default ITManagement