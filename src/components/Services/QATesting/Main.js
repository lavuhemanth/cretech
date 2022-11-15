import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import qa1 from "../../../assets/images/services/qa-1-1.jpg";
import qa2 from "../../../assets/images/services/qa-1-2.jpg";

const QATesting = () => {
	const [clicked, setClicked] = useState(0);
	const faqs = [
    {
      question: "Mobile App Testing",
      answer:
        "In the mobile app world, success comes from testing real-world scenarios on Android and iOS platforms. This can be a difficult task, as each platform has its own set of unique features and challenges. But by testing with real-world scenarios on both platforms, you can ensure that your app will be successful in the real world.To do this, you need to take into account the different ways that users interact with each platform. On Android, users are more likely to be hands-on, interacting directly with the app each platform. On Android, users are more likely to be hands-on, interacting directly with the app. This means that you need to test for things like touchscreen interactions and hardware buttons. On iOS, users are more likely to be hands-off, using Siri or other voice controls.",
    },
    {
      question: "Automation Testing",
      answer:
        " Automation testing is the process of automating the execution of test cases to validate the functionality of a software application. It reduces the testing effort and time and, hence, increases the ROI. Our automation testing services make use of the best tools and technologies to ensure high test coverage and accuracy. We also provide customized solutions to meet the specific requirements of our clients.",
    },
    {
      question: "Manual Testing",
      answer:
        "At CRETECH, we provide risk-based manual testing across all device combinations that support all development models. This allows our clients to get the most comprehensive testing for their products before release. Manual testing is essential to catch any potential bugs or user experience issues that may occur. Our team of experienced testers will work with you to create a testing plan that meets your specific needs and ensures that your product is ready for release.",
    },
    {
      question: "Performance Testing",
      answer:
        "Performance testing is a process used to measure how well a product performs under various conditions. By testing the product's operational capabilities at different loads, we can guarantee the best possible user experience. This process is essential for ensuring that the product meets the needs of its users and can help avoid potential issues that could arise from improper use.",
    },
    {
      question: "Data Analytics Testing",
      answer:
        "Say goodbye to data quality issues, as our dedicated teams are experts in big data and data warehouse testing. We can quickly and accurately identify any problems with your data, whether it's incorrect values, missing data, or simply incorrect formatting. We'll work with you to fix any problems so that your data is clean, accurate, and ready for use.",
    },
    {
      question: "Accessibility Testing",
      answer:
        "As the world increasingly moves online, it is more important than ever to make sure that everyone can access and use the internet, regardless of any disabilities they may have. That's where accessibility testing comes in. Our well-trained accessibility testers can test in accordance with the WCAG conformance levels and laws to make sure that your website or app is usable by everyone. By ensuring that your site is accessible, you can make sure that everyone can use it and that you're not excluding potential customers or users.",
    },
    {
      question: "eLearning Testing",
      answer:
        " At eLearning Testing, we understand how important it is for your learning and content management systems to work seamlessly together. We will work tirelessly to ensure that there are no hitches in your learning experience so that you can focus on what's important: learning!",
    },
    {
      question: "Web Service Testing",
      answer:
        "Web Service Testing is an essential part of ensuring that your API and Web Services are highly reliable, secure, and functional. Our broad testing will cover all aspects of your web service to ensure that it is running smoothly and delivering the expected results. We will work with you to identify any areas that may need improvement and make recommendations for how to optimize your web service to meet your needs.",
    },
  ];
	return (
    <>
      <Breadcumb Title="QA Testing" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={qa1} alt="" />
              </div>
              <h3 className="service-details__title">QA Testing</h3>
              <div className="service-details__content">
                <p>
                  Cretech is a software testing and QA services company
                  dedicated to helping startups and large enterprises achieve
                  seamless digital transformation. With a secure infrastructure
                  and the right tools, we have the testing capability to serve
                  global customers and spread more smiles.
                </p>
                <h4>
                  CRETECH is the Leader in Software Testing and QA Services.
                </h4>
                <p>
                  At CRETECH, we provide software testing and quality assurance
                  services that help you ensure your products are defect-free
                  and meet the highest quality standards. With over a decade of
                  experience, we have the expertise and resources to help.
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
                    src={qa2}
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
                      Software Testing Services We Offer
                    </p>
                    <ul className="service-details__caption__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Mobile App Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Automation Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Manual Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Performance Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Data Analytics Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Accessibility Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        eLearning Testing
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Web Service Testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
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
              </div>
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

export default QATesting