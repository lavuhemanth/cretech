import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BG from '../../assets/images/background/contact-one-bg-1-1.png'
import Breadcumb from '../Breadcumb/Main';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  const [email, setEmail] = useState("");
  const [body, setBody] = useState("")
  const [name, setName] = useState("");
    const handleSubmit = (event) =>  {
      event.preventDefault();
      debugger
      emailjs.send("service_dklncb9", "template_8bmuiyv", { name, email, body }, '0wY3XRYMuz7nWwg0I').then(data => {
        console.log('data :: ', data)
        if (data.status === 200) {
          toast.success("Mail Sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        setEmail('');
        setBody('');
        setName('');
      })
        .catch(error => {
          console.log(error)
          toast("Something went wrong");
          toast.warn("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    };
    return (
      <>
        <ToastContainer />
        <Breadcumb Title="Contact" Breadcumb="CONTACT" />
        <section className="contact-one section-padding--top section-padding--bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <form
                  className="contact-one__form contact-form-validated"
                  name="contact"
                >
                  <div className="section-title">
                    <p className="section-title__text">Contact with us</p>
                    <h2 className="section-title__title">
                      Join Us To Get IT Free Consultations
                    </h2>
                  </div>
                  <div className="row ">
                    <div className="col-lg-6 col-md-12">
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <textarea
                        name="body"
                        placeholder="Write message"
                        onChange={(e) => setBody(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button
                        className="thm-btn contact-one__btn"
                        onClick={handleSubmit}
                        type="submit"
                      >
                        <span>send a message</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
              <div className="col-lg-4">
                <div
                  className="contact-one__info wow fadeInRight"
                  data-wow-duration="1500ms"
                  style={{ backgroundImage: `url(${BG})` }}
                >
                  <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Address</h3>
                    <p className="contact-one__item__text">
                      330 5th Avenue SW, Suite 1800, Calgary, T2P 0J4
                      <br />
                      Canada
                    </p>
                  </div>
                  {/* <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Address</h3>
                    <p className="contact-one__item__text">
                      330 5th Avenue SW, Suite 1800, Calgary, T2P 0J4
                      <br />
                      Canada
                    </p>
                  </div>
                  <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Address</h3>
                    <p className="contact-one__item__text">
                      385 Rue Grenadier, Saint Constant, J5A 0L1
                      <br />
                      Canada
                    </p>
                  </div> */}
                  {/* <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Phone</h3>
                    <p className="contact-one__item__text">
                      Local: <Link to="tel:222999888">222 999 888</Link>
                      <br />
                      Mobile: <Link to="tel:0008888999">000 8888 999</Link>
                    </p>
                  </div> */}
                  <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Email</h3>
                    <p className="contact-one__item__text">
                      <Link to="mailto:info@sreeson.ca">info@sreeson.ca</Link>
                      <br />
                    </p>
                  </div>
                  <div className="contact-one__item">
                    <h3 className="contact-one__item__title">Mobile</h3>
                    <p className="contact-one__item__text">
                      <span>
                        <b>INDIA</b> +91 9972392949
                      </span>
                      <br />
                      <span>
                        <b>CANADA</b> +1 7802878705
                      </span>
                      <br />
                    </p>
                  </div>
                  <div className="contact-one__item">
                    <ul className="contact-one__social">
                      <li>
                        <Link
                          to="#"
                          onClick={() =>
                            window.location.assign(
                              "https://twitter.com/SreesonCanada"
                            )
                          }
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() =>
                            window.location.assign(
                              "https://www.facebook.com/SreesonCanada/"
                            )
                          }
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() =>
                            window.location.assign(
                              "https://www.linkedin.com/company/sreeson-canada-inc/"
                            )
                          }
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() =>
                            window.location.assign(
                              "https://www.instagram.com/sreeson_canada/"
                            )
                          }
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="google-map google-map--contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.230273283889!2d-114.0714057842221!3d51.048835751948026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb78be402f%3A0xbb200f05293c944a!2sCalgary%20Place%2C%20330%205%20Ave%20SW%20%231800%2C%20Calgary%2C%20AB%20T2P%200L3%2C%20Canada!5e0!3m2!1sen!2sin!4v1679908967488!5m2!1sen!2sin"
            className="google-map__one"
            title="gmap"
            allowFullScreen
          ></iframe>
        </section>
      </>
    );
}

export default Contact