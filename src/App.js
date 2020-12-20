import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import emailjs from "emailjs-com";
import { Modal } from "react-bootstrap";

import "./App.css";
import HeaderImage from "./header.jpg";
import BusinessOwnerImage from "./business-owner.jpg";
import RelaxImage from "./relax.jpg";
import MountedImage from "./mounted.jpg";
import StandingImage from "./standing.jpg";
import TabletImage from "./tablet.jpg";
import Logo from "./vector_logo.png";
import { Advertise } from "./Advertise";

const PRIMARY_COLOR = "#ffc6b7";
const PAGE_PADDING = "15px";
const SECONDARY_COLOR = "#efefef";
const SECTION_VERTICAL_PADDING = "32px";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Button = (props) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      {...props}
      style={{
        border: "none",
        padding: "19px 32px",
        backgroundColor: isHover ? "#bfb1c4" : "#efefef",
        cursor: "pointer",
        boxShadow: "none",
        textShadow: "none",
        outline: "none",
        width: "160px",
        fontSize: "18px",
        marginBottom: "16px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
    </button>
  );
};

const MidSection = (props) => {
  const { dir, picture, header, text, button, color, onClick } = props;
  const pictureOrderClass = dir === "left" ? "order-1" : "order-2";
  const textOrderClass = dir === "left" ? "order-2" : "order-1";
  return (
    <section
      style={{
        backgroundColor: color,
        paddingTop: SECTION_VERTICAL_PADDING,
        paddingBottom: SECTION_VERTICAL_PADDING,
      }}
    >
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${pictureOrderClass}`}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {picture}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className={`col-md-6 ${textOrderClass}`}
          >
            <div
              style={{
                marginBottom: "16px",
                fontSize: "45px",
                fontWeight: 500,
                lineHeight: "55px",
                color: "black",
              }}
            >
              {header}
            </div>
            <div
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                fontWeight: 300,
                color: "black",
              }}
            >
              {text}
            </div>
            <Button onClick={onClick}>{button.text}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/earn" />
        </Route>
        <Route exact path="/earn">
          <Earn />
        </Route>
        <Route exact path="/advertise">
          <Advertise />
        </Route>
      </Switch>
    </Router>
  );
}

const AppModal = ({ isVisible, title, body, footer, onClose }) => {
  return (
    <Modal show={isVisible} onHide={onClose} centered>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      {body && <Modal.Body>{body}</Modal.Body>}
    </Modal>
  );
};

const Form = ({ onFormSuccess, onFormFailure }) => {
  const formElem = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "zoho",
        "template_O4tPI8jh",
        e.target,
        "user_DpGYhD06hYHY0GLXd4G8Z"
      )
      .then(
        (result) => {
          onFormSuccess();
          formElem.current.reset();
        },
        (error) => {
          onFormFailure();
        }
      );
  }

  return (
    <form
      className="contact-form"
      onSubmit={sendEmail}
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      ref={formElem}
    >
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input
          type="text"
          class="form-control"
          name="user_name"
          id="nameInput"
        />
      </div>
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input
          type="email"
          class="form-control"
          name="user_email"
          id="emailInput"
        />
      </div>
      <div class="form-group">
        <label for="phoneInput">Phone number (optional)</label>
        <input
          type="text"
          class="form-control"
          name="phone_number"
          id="phoneInput"
        />
      </div>
      <div class="form-group">
        <label for="messageInput">Message</label>
        <textarea class="form-control" name="message" id="messageInput" />
      </div>
      <button
        type="submit"
        class="btn"
        style={{ backgroundColor: SECONDARY_COLOR }}
      >
        Send
      </button>
    </form>
  );
};

const Earn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalBody, setModalBody] = useState(null);
  const contactUsContent = useRef(null);

  const scrollToContactUs = () => scrollToRef(contactUsContent);

  useEffect(() => {
    window.gtag("send", "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  const onModalClose = () => {
    setIsModalVisible(false);
    setModalTitle(null);
    setModalBody(null);
  };

  const onFormSuccess = () => {
    setIsModalVisible(true);
    setModalTitle("Success");
    setModalBody(
      "Your message has been submitted successfully. We'll be in touch soon!"
    );
  };

  const onFormFailure = () => {
    setIsModalVisible(true);
    setModalTitle("Message was unsuccessful");
    setModalBody("Please try again.");
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${HeaderImage})`,
          height: "auto",
          padding: `0px ${PAGE_PADDING}`,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                src={Logo}
                style={{ height: "100px", width: "auto", marginTop: 50 }}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontWeight: 500,
                  marginTop: 80,
                  marginBottom: 50,
                }}
              >
                Make your retail space work for you
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div
                style={{
                  color: "white",
                  textDecoration: "underline",
                  marginBottom: 100,
                  cursor: "pointer",
                }}
                onClick={scrollToContactUs}
              >
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <MidSection
          header={"Advertise with us to increase your revenue"}
          text={
            "Increase your business revenue by placing digital advertisements in your retail space, with no disruption."
          }
          button={{ text: "Join Us" }}
          dir={"left"}
          picture={
            <img
              style={{ width: "80%", height: "auto" }}
              src={BusinessOwnerImage}
            />
          }
          color={"white"}
          onClick={scrollToContactUs}
        />
        <MidSection
          header={"No work involved, just a bit of your space."}
          text={
            "We will source advertisements and parts necessary to display ads in your space. Earn up to 80% of the ad revenue."
          }
          button={{ text: "Learn More" }}
          dir={"right"}
          picture={
            <img style={{ width: "80%", height: "auto" }} src={RelaxImage} />
          }
          color={PRIMARY_COLOR}
          onClick={scrollToContactUs}
        />
      </section>
      <section
        style={{
          paddingTop: SECTION_VERTICAL_PADDING,
          paddingBottom: SECTION_VERTICAL_PADDING,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                style={{
                  fontSize: "45px",
                  color: "black",
                  marginBottom: "16px",
                }}
              >
                Plans
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "black",
                  marginBottom: "16px",
                }}
              >
                Find the plan that works best for you business.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={TabletImage}
                  style={{
                    height: "200px",
                    width: "auto",
                  }}
                />
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>Tablet</div>
              <hr />
              <div>
                Tablet that can placed on a counter or mounted on a wall.
              </div>
              <hr />
              <div>You keep</div>
              <div style={{ fontSize: "32px", fontWeight: 700 }}>80%</div>
              <div>of ad revenue</div>
              <hr />
              <div>$5/mo. Maintenance</div>
              <div>$60 upfront cost</div>
            </div>
            <div class="col-sm-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={MountedImage}
                  style={{ height: "200px", width: "auto" }}
                />
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>Mounted</div>
              <hr />
              <div>
                We have different dimensions to fit in a variety of spaces.
              </div>
              <hr />
              <div>More information coming soon!</div>
            </div>
            <div class="col-sm-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={StandingImage}
                  style={{ height: "200px", width: "auto" }}
                />
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>
                Free standing
              </div>
              <hr />
              <div>
                This gorgeous free standing display will bring a modern feel to
                your retail space.
              </div>
              <hr />
              <div>More information coming soon!</div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: PRIMARY_COLOR,
          paddingTop: SECTION_VERTICAL_PADDING,
          paddingBottom: SECTION_VERTICAL_PADDING,
        }}
        ref={contactUsContent}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              <div
                style={{
                  fontSize: "45px",
                  color: "black",
                  marginBottom: "16px",
                }}
              >
                Contact Us
              </div>
              <Form
                onFormFailure={onFormFailure}
                onFormSuccess={onFormSuccess}
              />
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ffeab7",
          alignItems: "flex-start",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <img style={{ height: "auto", width: "200px" }} src={Logo} />
            </div>
          </div>
        </div>
      </footer>
      <AppModal
        isVisible={isModalVisible}
        title={modalTitle}
        body={modalBody}
        onClose={onModalClose}
      />
    </div>
  );
};

export default App;
