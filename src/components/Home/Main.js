import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
// import BGImg from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BGImg1 from '../../assets/images/background/slider-1-1.jpg'
import BGImg2 from '../../assets/images/background/slider-1-2.jpg'
import BGImg3 from '../../assets/images/shapes/service-four-bg-1-1.png'
import BGImg4 from '../../assets/images/shapes/funfact-one-bg.png'
// import BGImg5 from '../../assets/images/shapes/testi-bg-1-1.png'
// import BGImg6 from '../../assets/images/shapes/team-home-bg-1-1.jpg'
import BGImg7 from '../../assets/images/shapes/about-three-s-1.png'
// import img1 from '../../assets/images/resources/about-five-1-1.jpg'
import img2 from '../../assets/images/resources/about-five-1-2.jpg'
// import cl1 from "../../assets/images/clients/client-1-1.png";
// import cl2 from "../../assets/images/clients/client-1-2.png";
// import cl3 from "../../assets/images/clients/client-1-3.png";
// import cl4 from "../../assets/images/clients/client-1-4.png";
// import cl5 from "../../assets/images/clients/client-1-5.png";
// import cl6 from "../../assets/images/clients/client-1-6.png";
// import cl7 from "../../assets/images/clients/client-1-7.png";
// import cl8 from "../../assets/images/clients/client-1-8.png";
import img3 from "../../assets/images/resources/about-three-1-1.jpg";
import AnimatedNumber from "animated-number-react"
// import { Parallax } from 'react-parallax'

const Home = () => {

    const [ytShow, setytShow] = useState(false)
    const options = {
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            576: {
                margin: 30,
                items: 2
            },
            768: {
                margin: 30,
                items: 3
            },
            992: {
                margin: 30,
                items: 4
            },
            1200: {
                margin: 30,
                items: 5
            }
        },
    };
    const sliderOptions = {
        loop: true,
        items: 1,
        navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }
    // const projectOptions = {
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
    //     dots: false,
    //     margin: 0,
    //     items: 1,
    //     smartSpeed: 700,
    //     responsive: {
    //         0: {
    //             margin: 0,
    //             items: 1
    //         },
    //         768: {
    //             margin: 30,
    //             items: 2
    //         },
    //         992: {
    //             margin: 30,
    //             items: 3
    //         }
    //     }
    // }
    // const logoOptions = {
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     nav: true,
    //     navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
    //     dots: false,
    //     margin: 30,
    //     items: 2,
    //     smartSpeed: 700,
    //     responsive: {
    //         0: {
    //             margin: 30,
    //             items: 2
    //         },
    //         375: {
    //             margin: 30,
    //             items: 2
    //         },
    //         575: {
    //             margin: 30,
    //             items: 3
    //         },
    //         767: {
    //             margin: 50,
    //             items: 4
    //         },
    //         991: {
    //             margin: 40,
    //             items: 5
    //         },
    //         1199: {
    //             margin: 80,
    //             items: 5
    //         }
    //     }
    // }
    return (
      <>
        <div className="slider-one">
          <OwlCarousel
            className="slider-one__carousel owl-theme thm-owl__carousel"
            {...sliderOptions}
          >
            <div className="item slider-one__slide-1">
              <div
                className="slider-one__bg"
                style={{ backgroundImage: `url(${BGImg1})` }}
              ></div>
              <div className="slider-one__line"></div>
              <div className="slider-one__shape-1"></div>
              <div className="slider-one__shape-2"></div>
              <div className="slider-one__shape-3"></div>
              <div className="container">
                <div className="slider-one__content ">
                  <div className="slider-one__floated lettering-text">
                    technology
                  </div>
                  <p className="slider-one__text">
                    Welcome to best IT Solutions
                  </p>
                  <div className="slider-one__title-wrapper">
                    <h2 className="slider-one__title">
                      Our Intelligent <br />
                      Technology
                      <br />
                      Creations
                    </h2>
                  </div>
                  <div className="slider-one__btns">
                    <Link to="/about" className="thm-btn slider-one__btn">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item slider-one__slide-2">
              <div
                className="slider-one__bg"
                style={{ backgroundImage: `url(${BGImg2})` }}
              ></div>
              <div className="slider-one__line"></div>
              <div className="slider-one__shape-1"></div>
              <div className="slider-one__shape-2"></div>
              <div className="slider-one__shape-3"></div>
              <div className="container">
                <div className="slider-one__content ">
                  <div className="slider-one__floated lettering-text">
                    technology
                  </div>
                  <p className="slider-one__text">
                    Welcome to best IT Solutions
                  </p>
                  <div className="slider-one__title-wrapper">
                    <h2 className="slider-one__title">
                      Our Intelligent <br />
                      Technology <br />
                      Solutions
                    </h2>
                  </div>
                  <div className="slider-one__btns">
                    <Link to="/about" className="thm-btn slider-one__btn">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>

        <section className="section-padding--bottom section-padding--top about-five">
          <div className="container">
            <div className="row gutter-y-60">
              <div className="col-lg-6">
                <div className="about-five__images">
                  <div className="about-five__images__shape"></div>
                  <img
                    src={img2}
                    className="wow fadeInUp"
                    data-wow-duration="1500ms"
                    alt=""
                  />
                  {/* <img src={img2} alt="" /> */}
                  {/* <div className="about-five__video">
                    <Link
                      to="#"
                      onClick={() => setytShow(true)}
                      className="video-popup"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div> */}
                  <div
                    className="about-five__images__caption count-box wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <span className="count-text">
                      <AnimatedNumber
                        value={5}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                    Years <br />
                    Experience
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-five__content">
                  <div className="section-title ">
                    <p className="section-title__text">About Company</p>
                    <h2 className="section-title__title">
                      Your Trusted Partner for Business and IT Strategies
                    </h2>
                  </div>
                  <div className="about-five__text">
                    SREESONS's IT consulting services can help improve your
                    company's performance, scalability, and competitiveness
                    through the right technology enablement and usage. We can
                    expertly guide your IT and digital transformation
                    initiatives, from strategy to implementation.
                  </div>
                  <div className="about-five__text">
                    SREESONS has a team of highly experienced IT consultants who
                    can help assess your company's IT needs and recommend the
                    best solutions to improve performance and competitiveness.
                    Contact us today to learn more about our IT consulting
                    services and how we can help your business succeed.
                  </div>
                  <ul className="about-five__box">
                    <li className="about-five__box__item gray-bg">
                      <i className="about-five__box__icon icon-consulting"></i>
                      <div className="about-five__box__content">
                        <h3 className="about-five__box__title">
                          <Link to="/it-consultent">IT Consultant</Link>
                        </h3>
                        <p className="about-five__box__text">
                          Smarter Solutions
                        </p>
                      </div>
                    </li>
                    <li className="about-five__box__item gray-bg">
                      <i className="about-five__box__icon icon-chip"></i>
                      <div className="about-five__box__content">
                        <h3 className="about-five__box__title">
                          <Link to="/team">IT Specialist</Link>
                        </h3>
                        <p className="about-five__box__text">
                          Faster Solutions
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="about-four__meta">
                    {/* <div className="about-four__author">
                      <img
                        src="assets/images/resources/about-four-author-1.jpg"
                        alt=""
                      />
                      <div className="about-four__author__content">
                        <h3 className="about-four__author__title">
                          Michele Morrone
                        </h3>
                        <div className="about-four__author__designation">
                          Founder CEO
                        </div>
                      </div>
                    </div> */}
                    <Link to="/about" className="thm-btn about-four__btn">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className=" section-padding--top service-four gray-bg section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
          style={{ backgroundImage: `url(${BGImg3})` }}
        >
          <div className="container">
            <div className="section-title text-center">
              <p className="section-title__text">Popular Services</p>
              <h2 className="section-title__title">
                We Provide Our Client Best <br />
                IT Solution Services
              </h2>
            </div>
            <OwlCarousel
              className="thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
              {...options}
            >
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-new-product"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Product
                        <br />
                        Development
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-new-product"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Digital
                        <br />
                        Marketing
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-protection"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Security <br />
                        System
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-web-development"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        UI/UX
                        <br />
                        Designing
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-analysis"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Data
                        <br />
                        Analysis
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>

        <section
          className=" section-padding--top service-four gray-bg section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
          style={{ backgroundImage: `url(${BGImg3})` }}
        >
          <div className="container">
            <div className="section-title text-center">
              <p className="section-title__text">Popular Services</p>
              <h2 className="section-title__title">
                We Provide Our Client Best <br />
                IT Solution Services
              </h2>
            </div>
            <OwlCarousel
              className="thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
              {...options}
            >
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-new-product"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Product
                        <br />
                        Development
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-new-product"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Digital
                        <br />
                        Marketing
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-protection"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Security <br />
                        System
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-web-development"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        UI/UX
                        <br />
                        Designing
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-analysis"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <Link to="/infrastructure-plan">
                        Data
                        <br />
                        Analysis
                      </Link>
                    </h3>
                    <div className="service-card-three__text">
                      Providing the solutions for non-IT businesses.
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>

        <section className="funfact-one">
          <div className="container">
            <div
              className="funfact-one__inner wow fadeInUp background-size-cover"
              data-wow-duration="1500ms"
              style={{ backgroundImage: `url(${BGImg4})` }}
            >
              <ul className="funfact-one__list">
                <li className="funfact-one__list__item">
                  <h3 className="funfact-one__list__title count-box">
                    <span
                      data-stop="255"
                      data-speed="2500"
                      className="count-text"
                    >
                      <AnimatedNumber
                        value={255}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </h3>
                  <p className="funfact-one__list__text">
                    Business Interogation
                  </p>
                </li>
                <li className="funfact-one__list__item">
                  <h3 className="funfact-one__list__title count-box">
                    <span
                      data-stop="325"
                      data-speed="2500"
                      className="count-text"
                    >
                      <AnimatedNumber
                        value={325}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </h3>
                  <p className="funfact-one__list__text">Strategies Planned</p>
                </li>
                <li className="funfact-one__list__item">
                  <h3 className="funfact-one__list__title count-box">
                    <span
                      data-stop="569"
                      data-speed="2500"
                      className="count-text"
                    >
                      <AnimatedNumber
                        value={596}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </h3>
                  <p className="funfact-one__list__text">Projects Relased</p>
                </li>
                <li className="funfact-one__list__item">
                  <h3 className="funfact-one__list__title count-box">
                    <span
                      data-stop="769"
                      data-speed="2500"
                      className="count-text"
                    >
                      <AnimatedNumber
                        value={769}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </h3>
                  <p className="funfact-one__list__text">Satisfied Clients </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="section-padding--bottom section-padding--top project-one">
          <div className="container">
            <div className="project-one__top">
              <div className="row">
                <div className="col-lg-7">
                  <div className="section-title ">
                    <p className="section-title__text">Latest Project</p>
                    <h2 className="section-title__title">
                      Check We Have Solution <br />
                      Done IT Project
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="project-one__top__content">
                    <p className="project-one__top__text">
                      Pellentesque Viverra Eget Velit A Tincidunt. Sed Mattis
                      Enim Nisl, Sit Amet Malesuada Sapien Pulvinar Ut.
                    </p>
                    <div className="project-one__top__btns">
                      <Link
                        to="/projects"
                        className="thm-btn project-one__top__btn"
                      >
                        <span>View All Projects</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <OwlCarousel
              className="thm-owl__carousel project-one__carousel thm-owl__carousel--with-shadow"
              {...projectOptions}
            >
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-1.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-2.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-3.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-4.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-5.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="project-card-one">
                  <div className="project-card-one__image">
                    <img src="assets/images/projects/project-1-6.jpg" alt="" />
                  </div>
                  <div className="project-card-one__content">
                    <div className="project-card-one__content__inner">
                      <p className="project-card-one__text">
                        IT Technology Solution
                      </p>
                      <h3 className="project-card-one__title">
                        <Link to="/project-details">
                          Data Recovery Analysis
                        </Link>
                      </h3>
                      <Link
                        to="/project-details"
                        className="project-card-one__more"
                      >
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section> */}

        {/* <section class="black-bg cta-two">
          <Parallax
            bgImage={BGImg}
            bgImageAlt=""
            className="section-padding-lg--top section-padding-lg--bottom"
            strength={1000}
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
          style={{ backgroundImage: `url(${BGImg5})` }}
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
        {/* <section
          className="section-padding--bottom section-padding--top gray-bg background-size-cover"
          style={{ backgroundImage: `url(${BGImg6})` }}
        >
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

        <section className=" section-padding--top about-three about-three--home-one mb-5">
          <div
            className="about-three__shape wow fadeInRight"
            data-wow-duration="1500ms"
            style={{ backgroundImage: `url(${BGImg7})` }}
          ></div>
          <div className="container">
            <div className="row gutter-y-60">
              <div className="col-lg-6">
                <div className="about-three__image">
                  <img
                    src={img3}
                    className="wow fadeInUp"
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-three__content">
                  <div className="section-title ">
                    <p className="section-title__text">Company Benefits</p>
                    <h2 className="section-title__title">
                      Why You Should Choose Our Services
                    </h2>
                  </div>
                  <div className="about-three__text">
                    Choose Infetech to have custom software solutions for your
                    business with the most reasonable price.
                  </div>
                  <ul className="about-three__list">
                    <li className="about-three__list__item">
                      <div className="about-three__list__icon">
                        <i className="icon-cloud"></i>
                      </div>
                      <div className="about-three__list__content">
                        <h3 className="about-three__list__title">
                          <Link to="cyber-security">Cloud Based Services</Link>
                        </h3>
                        <p className="about-three__list__text">
                          Services address a range of simply free text
                          application and infrastructure needs.
                        </p>
                      </div>
                    </li>
                    <li className="about-three__list__item">
                      <div className="about-three__list__icon">
                        <i className="icon-group"></i>
                      </div>
                      <div className="about-three__list__content">
                        <h3 className="about-three__list__title">
                          <Link to="/team">Expert Team Members</Link>
                        </h3>
                        <p className="about-three__list__text">
                          Services address a range of simply free text
                          application and infrastructure needs.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-padding--top section-padding--bottom">
          <div className="container">
            <div className="section-title text-center">
              <p className="section-title__text">Direct from the Blog Posts</p>
              <h2 className="section-title__title">
                Checkout Our Latest <br />
                News & Articles
              </h2>
            </div>
            <div className="row gutter-y-30">
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <div className="blog-card-one">
                  <div className="blog-card-one__image">
                    <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                    <Link to="/blog-details"></Link>
                  </div>
                  <div className="blog-card-one__content">
                    <div className="blog-card-one__meta">
                      <div className="blog-card-one__date">
                        <i
                          className="fa fa-calendar-alt"
                          aria-hidden="true"
                        ></i>
                        July, 25, 2022
                      </div>
                      <Link to="/blog" className="blog-card-one__category">
                        Designer
                      </Link>
                    </div>
                    <h3 className="blog-card-one__title">
                      <Link to="/blog-details">
                        Web design done Delightful Visualization Examples
                      </Link>
                    </h3>
                    <Link to="/blog-details" className="blog-card-one__more">
                      Read More
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="blog-card-one">
                  <div className="blog-card-one__image">
                    <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                    <Link to="/blog-details"></Link>
                  </div>
                  <div className="blog-card-one__content">
                    <div className="blog-card-one__meta">
                      <div className="blog-card-one__date">
                        <i
                          className="fa fa-calendar-alt"
                          aria-hidden="true"
                        ></i>
                        July, 25, 2022
                      </div>
                      <Link to="/blog" className="blog-card-one__category">
                        Graphic
                      </Link>
                    </div>
                    <h3 className="blog-card-one__title">
                      <Link to="/blog-details">
                        Technology Support Allows Erie non-profit to Serve
                      </Link>
                    </h3>
                    <Link to="/blog-details" className="blog-card-one__more">
                      Read More
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="blog-card-one">
                  <div className="blog-card-one__image">
                    <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                    <Link to="/blog-details"></Link>
                  </div>
                  <div className="blog-card-one__content">
                    <div className="blog-card-one__meta">
                      <div className="blog-card-one__date">
                        <i
                          className="fa fa-calendar-alt"
                          aria-hidden="true"
                        ></i>
                        July, 25, 2022
                      </div>
                      <Link to="/blog" className="blog-card-one__category">
                        SEO
                      </Link>
                    </div>
                    <h3 className="blog-card-one__title">
                      <Link to="/blog-details">
                        Software Makes Your Profit Double if You Scale Properly
                      </Link>
                    </h3>
                    <Link to="/blog-details" className="blog-card-one__more">
                      Read More
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="cta-one">
          <div className="container">
            <div
              className="cta-one__inner text-center wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <div className="cta-one__circle"></div>
              <div className="section-title ">
                <p className="section-title__text">
                  Need Any Technology Solution
                </p>
                <h2 className="section-title__title section-title__title--light">
                  Let’s Work Togather on Project
                </h2>
              </div>
              <Link
                to="/contact"
                className="thm-btn thm-btn--light cta-one__btn"
              >
                <span>Start Now</span>
              </Link>
            </div>
          </div>
        </section>
        {ytShow && (
          <div className="YouTubePopUp-Wrap">
            <div className="YouTubePopUp-Content">
              <span
                className="YouTubePopUp-Close"
                onClick={() => setytShow(false)}
              ></span>
              <iframe
                src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                title="ytvideo"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </>
    );
}

export default Home