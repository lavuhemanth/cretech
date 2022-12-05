import React from 'react'
import { Link } from 'react-router-dom'
import Breadcumb from '../../Breadcumb/Main'
// import ServiceSidebar from '../ServiceSidebar/Main'
import itc from "../../../assets/images/industries/education.jpg";
import IndustriesSideBar from '../IndustriesSideBar/Main';


const Education = () => {
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
            <Breadcumb Title="Education IT Services" Breadcumb="INDUSTRIES" />
            <section className="section-padding--bottom section-padding--top service-details--page">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8">
                            <div className="service-details__image">
                                <img src={itc} alt="" />
                            </div>
                            <h3 className="service-details__title">Educational App Development Company</h3>
                            <div className="service-details__content">
                                <p>
                                    <b>Navigate your education to next level through our leading-edge education and training application and emerging technology solutions. Offer the best solutions for school, colleges and all the universities.</b>
                                </p>
                                <p>
                                    Technology can improve teaching and learning and help our student to become successful. Since learning should not end with the end of schools, with technology student can access multiple websites, solve the complex assignments and get virtual knowledge. They get practical knowledge with the help of technology, enhance their skills that help in their successful future.
                                </p>
                                <p>
                                    Sreeson understand the importance of education create resources, new opportunities for learning, ways to collaborate and create, and save money. Our e-learning solution transform the whole education society. Our e-books, onlinelabs, virtuallabs give students excellent educational experiences. We connect student with various schools and provide virtual seminars and conferences to them.
                                </p>
                                <p>
                                    At Sreeson we assist the education institutes gain competitive advantage from our e-learning solutions and completely focus on innovation and growth of children. Our ecosystem harnesses artificial intelligence, automation, cloud, machine learning, and mobile technologies for K-12 and higher education. Our technology leverage range from business to enterprise application level and we innovate and create a new platforms.
                                </p>
                                <h4>
                                    E-learning Software Solutions
                                </h4>
                                <p>
                                    <b>Virtual Classroom</b>
                                </p>
                                <p>
                                    We build a virtual learning environment that is totally distinguish from typical classroom. Our online classrooms give learners greater freedom to engage with the material creativelyand for the course content to adapt and respond based on their inputs.Our classrooms offer live lesson, incorporating live learning into lesson plan, motivate learners and boost children motivation in terms of skills.
                                </p>
                                <p>
                                    <b>Distance Learning Programs</b>
                                </p>
                                <p>
                                    Student need not to be physically present in the classroom, for offline programs they should be physically available but distance learning program help them to access the content through online that make it possible for those who are remotely far and are unable to attend the physically. We help in learning, students can gain a top-notch education from many prestigious academic institutions around the world.
                                </p>
                                <p>
                                    <b>Online Training</b>
                                </p>
                                <p>
                                    It is very boring to learn from books but students can learn more from games where they get a competitive high spirit environment of learning. Games help them to learn in more fun way. It fosters their creativity and make complex topics of education simplified and easy. From initial stage of building we build innovative learning apps to help learn with fun.
                                </p>
                                <p>
                                    <b>Education Games</b>
                                </p>
                                <p>
                                    It is very boring to learn from books but students can learn more from games where they get a competitive high spirit environment of learning. Games help them to learn in more fun way. It fosters their creativity and make complex topics of education simplified and easy. From initial stage of building we build innovative learning apps to help learn with fun.
                                </p>
                                <p>
                                    <b>Corporate Training</b>
                                </p>
                                <p>
                                    Formal classroom training is just one way to meet the skills gap. With an explosive growth in technology tools to train people today, the best corporate training programs provide multiple ways people can consume training, We build enterprise mobility solutions for education industry taking into account of several enterprise e-learning grade implementation
                                </p>
                                <h4>
                                    Emerging
                                    Technology Solutions
                                </h4>
                                <p>
                                    <b>
                                        M- Learning</b>
                                </p>
                                <p>
                                    E-product that make the studies easier,designed to give the ultimate innovative and advanced option for the students, increase their potential ,help in real time problem solving reduce the complexities of the questions. Designed specially for their support and help.
                                </p>
                                <p>
                                    <b>Educational AR & VR</b>
                                </p>
                                <p>
                                    App designed as a real world example provide the holistic view to the children help in mastering their topics and the computer graphics help them to master with the help of 3 d visualizations
                                </p>
                                <p>
                                    <b>Artificial Intelligence and Machine Learning</b>
                                </p>
                                <p>
                                    Designed specially for the students to understand the weaker part designed according to the capabilities and requirements of the students.
                                </p>
                                <p>
                                    <b>Big Data Analytics</b>
                                </p>
                                <p>
                                    Provide them the actionable insights of the data and trends that help them to learn in an effective manner.
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

export default Education