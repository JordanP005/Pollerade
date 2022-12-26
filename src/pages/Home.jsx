import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Item";
import { Link } from "react-router-dom";

function Home() {
  const [hamState, setHamState] = React.useState(false);

  function toggleHam() {
    setHamState((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="main-wrapper">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo">
            <img src="images/logo.png" alt="logo" className="nav-logo" />
          </Link>
          {window.innerWidth <= 820 ? (
            <img
              src={hamState ? "images/close.svg" : "images/hamburger.png"}
              className="ham"
              onClick={toggleHam}
            />
          ) : (
            <ul>
              <li>
                <a href="#Services">
                  Services
                  <img src="images/services-icon.svg" />
                </a>
              </li>
              <li>
                <a href="#About">
                  About <img src="images/info-icon.svg" />
                </a>
              </li>
              <li>
                <a href="#Contact">
                  Contact
                  <img src="images/contact-icon.svg" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {hamState ? (
        <div className="modal">
          <ul>
            <li>
              <a href="#Services" onClick={toggleHam}>
                Services
                <img src="images/services-icon.svg" />
              </a>
            </li>
            <li>
              <a href="#About" onClick={toggleHam}>
                About <img src="images/info-icon.svg" />
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={toggleHam}>
                Contact
                <img src="images/contact-icon.svg" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="right-wrapper">
        <section className="hero-section">
          <div className="hero-container">
            <h1>Digital Marketing Done Right</h1>
            <img
              src="images/marketing.svg"
              alt="marketing"
              className="hero-img"
            />
          </div>
          <img
            src={
              window.innerWidth <= 820
                ? "images/arrow-m.gif"
                : "images/mousescroll.gif"
            }
            className="mousescroll"
          />
        </section>
        <section className="info-section" id="Services">
          <img src="images/teamwork.svg" alt="teamwork" />
          <div className="info-div">
            <h1>Leave your marketing to us</h1>
            <p>
              Your oline presence is our priority. We always strive to put your
              business out in the most professional and effective way possible.
              Our team of dedicated and passionate agents are on the job 24/7
              working towards taking your digital marketing to the next level
            </p>
          </div>
        </section>
        <section className="carousel-section" id="About">
          <Carousel itemsToShow={1}>
            <Item
              img="images/customer.svg"
              heading="Working With The Customer"
              text="We strive to get your business to reach your goals and offer tailor made services to optimize your expierience "
            ></Item>
            <Item
              img="images/progress.svg"
              heading="Tracking Your Service"
              text="See what we are doing every step of the way and keep up to date on progress"
            ></Item>
            <Item
              img="images/time.svg"
              heading="Getting You Results On Time"
              text="We strive to get your business results as effiecently as possible"
            ></Item>
          </Carousel>
        </section>
        <footer id="Contact">
          <div className="footer-right">
            <img src="images/logo.png" />
            <ul>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#About">About us</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/Terms&Conditions">Terms And Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="social-div">
            <img
              src="images/icon-facebook.svg"
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
            />
            <img
              src="images/icon-instagram.svg"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            />
            <img
              src="images/icon-twitter.svg"
              onClick={() => window.open("https://www.twitter.com/", "_blank")}
            />
            <img
              src="images/icon-pinterest.svg"
              onClick={() =>
                window.open("https://www.pinterest.com/", "_blank")
              }
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
