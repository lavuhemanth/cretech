import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
// import BG1 from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG3 from '../../assets/images/resources/about-four-1-3.jpg';
// import BG2 from '../../assets/images/shapes/testi-bg-1-1.png';
import img1 from "../../assets/images/resources/about-five-1-2.jpg";
// import cl1 from "../../assets/images/clients/client-1-1.png";
// import cl2 from "../../assets/images/clients/client-1-2.png";
// import cl3 from "../../assets/images/clients/client-1-3.png";
// import cl4 from "../../assets/images/clients/client-1-4.png";
// import cl5 from "../../assets/images/clients/client-1-5.png";
// import cl6 from "../../assets/images/clients/client-1-6.png";
// import cl7 from "../../assets/images/clients/client-1-7.png";
// import cl8 from "../../assets/images/clients/client-1-8.png";
import Breadcumb from '../Breadcumb/Main'
// import { Parallax } from 'react-parallax'

const About = () => {
    const logoOptions = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
        margin: 30,
        items: 2,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 30,
                items: 2
            },
            375: {
                margin: 30,
                items: 2
            },
            575: {
                margin: 30,
                items: 3
            },
            767: {
                margin: 50,
                items: 4
            },
            991: {
                margin: 40,
                items: 5
            },
            1199: {
                margin: 80,
                items: 5
            }
        }
    }
    return (
      <>
        <Breadcumb Title="About Us" Breadcumb="ABOUT" imgSrc={BG3} />
        <section className="about-four section-padding--top">
          <div className="container">
            <div className="row gutter-y-60">
              <div className="col-lg-6">
                <div className="about-four__image">
                  <img
                    src={img1}
                    className="wow fadeInUp"
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-four__content">
                  <div className="section-title ">
                    <p className="section-title__text">About Company</p>
                    <h2 className="section-title__title">
                      Your Trusted Partner for Business and IT Strategies
                    </h2>
                  </div>
                  <div className="about-four__text">
                    The top minds at CRETECH have extensive experience and
                    knowledge in the IT field. With our strategic IT consulting,
                    we can help you develop a comprehensive IT strategy for your
                    company's digital and technological transformation that is
                    in line with your business goals. We can help you optimize
                    your software portfolio, automate and digitalize your
                    business processes, and deploy cutting-edge technology. In
                    addition, we can assist you in finding the right partners
                    and vendors and in negotiating and managing contracts. Our
                    services are tailored to meet your specific needs, and we
                    are committed to delivering high-quality results.
                    <br />
                    <p>
                      <b>Mission:</b> We believe in creating an inclusive &
                      diverse work environment that would prove as platform for
                      professionals who are motivated, innovative and prepared
                      to excel.
                    </p>
                    <p>
                      <b>Vision:</b> Integrity, Reliability & Collaboration are
                      the key values of N Information Technologies.
                    </p>
                  </div>

                  {/* <div className="about-four__meta">
                    <div className="about-four__author">
                      <img
                        src="assets/images/resources/about-four-author-1.jpg"
                        alt=""
                      />
                      <div className="about-four__author__content">
                        <h3 className="about-four__author__title">
                          Manoj Lavu
                        </h3>
                        <div className="about-four__author__designation">
                          Founder CEO
                        </div>
                      </div>
                    </div>
                    <Link to="/services" className="thm-btn about-four__btn">
                      <span>Learn More</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-padding--bottom section-padding--top">
          <div className="container">
            <div className="section-title text-center">
              <p className="section-title__text">Our Team members</p>
              <h2 className="section-title__title">
                Our Expert Person to Provide <br /> IT Solution Services
              </h2>
            </div>
            <div className="row gutter-y-30">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="team-card-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="000ms"
                >
                  <div className="team-card-one__image">
                    <img src="assets/images/team/team-2-1.jpg" alt="" />
                    <div className="team-card-one__social">
                      <ul className="team-card-one__social__links">
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="team-card-one__social__icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-one__content">
                    <h3 className="team-card-one__title">
                      <Link to="#">Michelle Monaghan</Link>
                    </h3>
                    <p className="team-card-one__designation">Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="team-card-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="team-card-one__image">
                    <img src="assets/images/team/team-2-2.jpg" alt="" />
                    <div className="team-card-one__social">
                      <ul className="team-card-one__social__links">
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="team-card-one__social__icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-one__content">
                    <h3 className="team-card-one__title">
                      <Link to="#">Jessica Brown</Link>
                    </h3>
                    <p className="team-card-one__designation">Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="team-card-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="200ms"
                >
                  <div className="team-card-one__image">
                    <img src="assets/images/team/team-2-3.jpg" alt="" />
                    <div className="team-card-one__social">
                      <ul className="team-card-one__social__links">
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="team-card-one__social__icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-one__content">
                    <h3 className="team-card-one__title">
                      <Link to="#">Kevin Martin</Link>
                    </h3>
                    <p className="team-card-one__designation">Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="team-card-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="team-card-one__image">
                    <img src="assets/images/team/team-2-4.jpg" alt="" />
                    <div className="team-card-one__social">
                      <ul className="team-card-one__social__links">
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="team-card-one__social__icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-one__content">
                    <h3 className="team-card-one__title">
                      <Link to="#">Sarah Albert</Link>
                    </h3>
                    <p className="team-card-one__designation">Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="black-bg cta-two">
          <Parallax
            bgImage={BG1}
            bgImageAlt=""
            className="cta-two__bg section-padding-lg--top section-padding-lg--bottom"
            strength={300}
          >
            <div className="container">
              <div className="cta-two__inner">
                <h3 className="cta-two__title">
                  Better IT Solutions And Services At Your{" "}
                  <span>Fingertips</span>
                </h3>
                <Link to="/contact" className="thm-btn cta-two__btn">
                  <span>LEarn More</span>
                </Link>
              </div>
            </div>
          </Parallax>
        </section> */}
        {/* <section
          className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
          style={{ backgroundImage: `url(${BG2})` }}
        >
          <div className="container">
            <div className="row gutter-y-60">
              <div className="col-lg-5">
                <div className="testimonials-two__content">
                  <div className="section-title ">
                    <p className="section-title__text">Our clients</p>
                    <h2 className="section-title__title">
                      We Are Trusted Worldwide Peoples
                    </h2>
                  </div>
                  <div className="testimonials-two__content__text">
                    Sed ut perspiciatis unde omnis natus error sit voluptatem
                    accusa ntium doloremque laudantium totam rem aperiamea
                    queipsa quae abillo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </div>
                  <div className="testimonials-two__content__text">
                    Pellentesque gravida lectus vitae nisi luctus, Finibus
                    aliquet ligula ultrices.
                  </div>
                  <Link
                    to="/about"
                    className="thm-btn testimonials-two__content__btn"
                  >
                    <span>View All feedbacks</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonials-two__items">
                  <div className="row gutter-y-30">
                    <div className="col-lg-12">
                      <div className="testimonials-one-card">
                        <div className="testimonials-one-card__image">
                          <img
                            src="assets/images/resources/testi-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonials-one-card__content">
                          <div className="testimonials-one-card__text">
                            On the other hand denounc with ghteo indignation and
                            dislike men who so beguiled and demoralized the
                            charms of pleasure the momen blinded by desire
                            cannot foresee the pain and trouble.
                          </div>
                          <h3 className="testimonials-one-card__title">
                            Michal Rahul
                          </h3>
                          <p className="testimonials-one-card__designation">
                            Ul - UX Designer
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="testimonials-one-card">
                        <div className="testimonials-one-card__image">
                          <img
                            src="assets/images/resources/testi-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonials-one-card__content">
                          <div className="testimonials-one-card__text">
                            On the other hand denounc with ghteo indignation and
                            dislike men who so beguiled and demoralized the
                            charms of pleasure the momen blinded by desire
                            cannot foresee the pain and trouble.
                          </div>
                          <h3 className="testimonials-one-card__title">
                            Jessica Brown
                          </h3>
                          <p className="testimonials-one-card__designation">
                            Ul - UX Designer
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="client-carousel client-carousel--two">
          <div className="container">
            <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
              <div className="item">
                <img src={cl1} alt="" />
              </div>
              <div className="item">
                <img src={cl2} alt="" />
              </div>
              <div className="item">
                <img src={cl3} alt="" />
              </div>
              <div className="item">
                <img src={cl4} alt="" />
              </div>
              <div className="item">
                <img src={cl5} alt="" />
              </div>
              <div className="item">
                <img src={cl6} alt="" />
              </div>
              <div className="item">
                <img src={cl7} alt="" />
              </div>
              <div className="item">
                <img src={cl8} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div> */}
      </>
    );
}

export default About