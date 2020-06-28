import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import emailjs from "emailjs-com";

import "./App.css";
import HeaderImage from "./header.jpg";
import BusinessOwnerImage from "./business-owner.jpg";
import RelaxImage from "./relax.jpg";
import MountedImage from "./mounted.jpg";
import StandingImage from "./standing.jpg";
import Logo from "./vector_logo.png";

const PRIMARY_COLOR = "#ffc6b7";
const PAGE_PADDING = "30px";
const SECONDARY_COLOR = "#efefef";

const TH = (props) => {
  return (
    <th
      style={{
        backgroundColor: SECONDARY_COLOR,
        border: `1px ${SECONDARY_COLOR} solid`,
        padding: "6px",
        fontSize: "20px",
      }}
    >
      {props.children}
    </th>
  );
};

const TD = (props) => {
  return (
    <td
      {...props}
      style={{
        border: `1px ${SECONDARY_COLOR} solid`,
        padding: "6px",
        fontSize: "20px",
        ...props.$style,
      }}
    >
      {props.children}
    </td>
  );
};

const MenuItem = (props) => {
  //replace with link
  const { location } = props;
  return (
    <Link to={location} style={{ marginRight: "12px", color: "white" }}>
      {props.children}
    </Link>
  );
};

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
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
    </button>
  );
};

const MidSection = (props) => {
  const { dir, picture, header, text, button, color } = props;
  const pictureOrderClass = dir === "left" ? "order-1" : "order-2";
  const textOrderClass = dir === "left" ? "order-2" : "order-1";
  return (
    <section
      style={{
        justifyContent: "space-between",
        backgroundColor: color,
        padding: `63px ${PAGE_PADDING}`,
        display: "flex",
        flexDirection: dir === "left" ? "row" : "row-reverse",
      }}
      className="container-fluid"
    >
      <div className="row">
        <div className={`col-md-6 ${pictureOrderClass}`}>{picture}</div>
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
          <Button>{button.text}</Button>
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
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

const Form = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

const Earn = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${HeaderImage})`,
          height: "450px",
          padding: `0px ${PAGE_PADDING}`,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
        className="container-fluid"
      >
        <div
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "50px",
          }}
          className="row"
        >
          <div className="col">
            <img
              style={{ marginTop: "50px", height: "auto", width: "200px" }}
              src={Logo}
            />
          </div>
        </div>
        <div
          style={{
            color: "white",
            fontSize: "45px",
            fontWeight: 500,
            marginBottom: "32px",
          }}
          clasName="row"
        >
          <div className="col-7">Make your retail space work for you.</div>
        </div>
        <div
          style={{ color: "white", textDecoration: "underline" }}
          className="row"
        >
          <div className="col">Learn More</div>
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
        />
      </section>
      <section style={{ padding: "63px 150px", backgroundColor: "white" }}>
        <div style={{ width: "400px" }}>
          <div
            style={{ fontSize: "45px", color: "black", marginBottom: "16px" }}
          >
            Plans
          </div>
          <div
            style={{ fontSize: "16px", color: "black", marginBottom: "16px" }}
          >
            Find the plan that works best for you business.
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: "16px",
            justifyContent: "space-between",
            width: "500px",
          }}
        ></div>

        <table style={{ borderCollapse: "collapse", marginBottom: "32px" }}>
          <tr>
            <TH></TH>
            <TH>Type</TH>
            <TH>You Keep</TH>
            <TH>Maintenance Cost</TH>
            <TH>One-time Installation</TH>
          </tr>
          <tr>
            <TD>
              <img
                src={MountedImage}
                style={{ height: "200px", width: "auto" }}
              />
            </TD>
            <TD>
              <div>
                Mounted digital display. We have different dimensions to fit in
                a variety of spaces.
              </div>
            </TD>
            <TD $style={{ textAlign: "center", width: "200px" }}>
              80% of ad revenue
            </TD>
            <TD $style={{ textAlign: "center", width: "200px" }}>$5/mo.</TD>
            <TD $style={{ textAlign: "center", width: "200px" }}>$260-$460*</TD>
          </tr>
          <tr>
            <TD>
              <img
                src={StandingImage}
                style={{ height: "200px", width: "auto" }}
              />
            </TD>
            <TD>
              <div>
                Free-standing digital display. This gorgeous free standing
                display will enhance the appearance of your retail space.
              </div>
            </TD>
            <TD colspan="3" $style={{ textAlign: "center" }}>
              Coming soon
            </TD>
          </tr>
        </table>
        <div style={{ color: "gray", fontSize: "12px" }}>
          * We will work with you to find the display size that fits the best
          with you space.
        </div>
      </section>
      <section style={{ padding: "63px 38px", backgroundColor: PRIMARY_COLOR }}>
        <Form />
      </section>
      <footer
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ffeab7",
        }}
      >
        <div>Slogan</div>
        <div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Get Started</div>
          <div>Social Media Placeholder</div>
        </div>
      </footer>
    </div>
  );
};

const Advertise = () => {
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            'url("https://media.discordapp.net/attachments/718995649550352689/719031866082197544/city-meal-food-produce-usa-market-544027-pxhere.com_2.jpg?width=1404&height=936")',
          height: "450px",
          backgroundColor: "blue",
          padding: "0px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "36px",
            }}
          >
            Placeholder
          </div>
        </div>
        <div
          style={{
            width: "450px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "45px",
              fontWeight: 500,
              marginBottom: "32px",
            }}
          >
            Make your retail space work for you.
          </div>
          <div style={{ color: "white", textDecoration: "underline" }}>
            Learn More
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
              style={{ width: "45%", height: "auto" }}
              src="https://media.discordapp.net/attachments/718995649550352689/719219692417581056/wallpaperflare.com_wallpaper_1.jpg?width=936&height=936"
            />
          }
        />
        <MidSection
          header={"No work involved, just a bit of your space."}
          text={
            "We will source advertisements and parts necessary to display ads in your space. Earn up to 80% of the ad revenue."
          }
          button={{ text: "Learn More" }}
          dir={"right"}
          picture={
            <img
              style={{ width: "45%", height: "auto" }}
              src="https://cdn.discordapp.com/attachments/718995649550352689/719220796039626752/Untitled_3.jpg"
            />
          }
        />
      </section>
      <section style={{ padding: "63px 38px" }}>pricing</section>
      <section style={{ padding: "63px 38px" }}>contact section</section>
      <footer
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#e1e3ea",
        }}
      >
        <div>Slogan</div>
        <div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Get Started</div>
          <div>Social Media Placeholder</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
