import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Modal } from "react-bootstrap";

import Logo from "./vector_logo.png";
import LocalIcon from "./local.jpg";
import InvestIcon from "./invest.jpg";
import LocalBusiness from "./local-business.jpg";

const PRIMARY_COLOR = "#ffc6b7";
const SECONDARY_COLOR = "#efefef";

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
        "template_twu37fi",
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
      style={{ paddingTop: "24px", paddingBottom: "24px" }}
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
        <label for="company">Company</label>
        <input type="text" class="form-control" name="company" id="company" />
      </div>
      <div class="form-group">
        <label for="company_zip">Company Zip</label>
        <input
          type="text"
          class="form-control"
          name="company_zip"
          id="company_zip"
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
        class="btn btn-secondary"
        style={{ backgroundColor: "black" }}
      >
        Get Started Now
      </button>
    </form>
  );
};

export const Advertise = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalBody, setModalBody] = useState(null);

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
    <div style={{ width: "100%", height: "100%" }}>
      <section
        style={{
          backgroundColor: PRIMARY_COLOR,
          paddingTop: "14px",
          paddingBottom: "14px",
          boxSizing: "border-box",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ height: "auto", width: "200px" }}
                src={Logo}
                className="img-fluid"
              />
            </div>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Reach out today: ‪(415) 275-1727‬
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: SECONDARY_COLOR }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={LocalBusiness}
                width={400}
                style={{ marginBottom: "24px" }}
                className="img-fluid"
              />
              <div
                style={{
                  marginBottom: "16px",
                  fontSize: "45px",
                  fontWeight: 500,
                  lineHeight: "55px",
                  color: "black",
                }}
              >
                Effective low cost advertising
              </div>
              <div>
                Reach out to your untapped audience: clients of local
                businesses. Advertise your product or service to customers in
                spaces they trust and reguarly spend money in.
              </div>
            </div>
            <div className="col-md-6">
              <Form
                onFormFailure={onFormFailure}
                onFormSuccess={onFormSuccess}
              />
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: "14px", paddingBottom: "14px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={LocalIcon} style={{ height: 150, width: "auto" }} />
                <div>
                  Place your ads locally to target customers of brick-and-mortar
                  businesses.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={InvestIcon} style={{ height: 150, width: "auto" }} />
                <div>Advertise and grow your business cost-effectively.</div>
              </div>
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
              <img
                style={{ height: "auto", width: "200px" }}
                src={Logo}
                className="img-fluid"
              />
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
