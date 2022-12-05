import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/services/bigdata.png";


const Bigdata = () => {
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
      <Breadcumb Title="Big Data Analytics Solutions" Breadcumb="SERVICES" />
      <section className="section-padding--bottom section-padding--top service-details--page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="service-details__image">
                <img src={itc} alt="" />
              </div>
              <h3 className="service-details__title">Big Data Analytics Solutions</h3>
              <div className="service-details__content">
              <p>
                <b>Innovate a high end data analytics and actionable insights important for your technical competencies support big data analytics solutions.</b>
              </p>
              <h4>
              Big Data Analytics Services
              </h4>
              <p>
              We explore data from various resources, architect and strategize with our data technology. We offer complete services that harness big data, through our big data materialize a roadmap and alliance that aggregate IT strength and enable accelerated growth. We improve operational efficiencies and conduct feasibility test for your project.
              </p>
              <p>
              Our strategy and consulting define and complement adopts structure approach from different platform and transformation. We create new insights through our big data and adopt ROI system. We help in exchanging diverse information and provide deepest insights and analyze before taking critical decision.
              </p>
              <p>
              We focus in development of technology based on big data and then furnishing, optimizing data into useful insights. We help organization messed with the complex data, analyze it remove bugs and then furnish the best creative result help them to strive a head in their business.
              </p>
              <h4>
              Big-Data Services
              </h4>
              <p>
                <b>Apache Hadoopt</b>
              </p>
              <p>
              Apache hadoop is a build in software for processing large amount of data. This help in data processing, data access, data guidance and governance of data. It is designed to handle failures of application and top services to handle the failures.
              </p>
              <p>
                <b>Apache Hive</b>
              </p>
              <p>
              This is simplified apache hadoop library that have all plug-in and server present in it. It has SQL data servers and the developers use that in successfully accessing the database within the organization without any risk and failures.
              </p>
              <p>
                <b>Apache Mahout</b>
              </p>
              <p>
              This is scala based library used in designing complex machine learning algorithms and data science. These help developers to build the easy driven projects based on machine learning algorithm with the AI.
              </p>
              <p>
                <b>Apache Pig</b>
              </p>
              <p>
              Apache pig is used for high data analysis and it contain some build in functions and variables that help in data sets ,it is based on apache hives and apache hadoop. We help in providing high standards to organization.
              </p>
              <p>
                <b>Apache Thrift</b>
              </p>
              <p>
              The Apache Thrift software framework, for scalable cross-language services development, combines a software stack with a code generation engine to build services that work efficiently and seamlessly between C++, Java, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk and Delphi and other languages.
              </p>
              <p>
                <b>Apache Zookeeper</b>
              </p>
              <p>
              Apache Zookeeper is an effort to develop and maintain an open-source server which enables highly reliable distributed coordination. Zookeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.
              </p>
              <p>
                <b>Apache Kafka</b>
              </p>
              <p>
              Apache Kafka is a community distributed event streaming platform capable of handling trillions of events a day. It has commercial features designed to enhance the streaming experience of both operators and developers in production, at massive scale. It will innovate, We need access to a wide stream of data, and that data must be integrated.
              </p>
              <p>
                <b>NoSql Database</b>
              </p>
              <p>
              We are specialized in designing a database that is not using the sql and we deliver the part that is based on mongo db, Couch based and Cassandra. Our database provide security, maintain and supporting of data.
              </p>
              <p>
                <b>Apache Spark</b>
              </p>
              <p>
              Apache spark is the lightning fast unified engine for big data and machine learning. It is committed to maintain large amount of data. With our apache spark we provide high versality and benefits and support to various big data apps and many more.
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

export default Bigdata