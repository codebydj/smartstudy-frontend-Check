import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCopyright } from "@fortawesome/free-regular-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex">
        <div>
          <h1 className="heading">SmartStudy</h1>
          <p className="paragraph">
            Empowering students with organized, assembled study materials for
            better academic performance
          </p>
        </div>

        <div>
          <h1 className="heading">Contact Us</h1>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#0000ff", marginRight: "5px" }}
            />
            <span className="paragraph">support@smartstudy.edu</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#00ff00", marginRight: "5px" }}
            />
            <span className="paragraph">+9123456788</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ff0000", marginRight: "5px" }}
            />
            <span className="paragraph">123 education st, learning city</span>
          </div>
        </div>

        <div>
          <h1 className="heading">Quick Links</h1>
          <div>
            <p className="paragraph Footer_nav_link">About Us</p>
            <p className="paragraph Footer_nav_link">Privacy Policy</p>
            <p className="paragraph Footer_nav_link">Terms of Service</p>
            <p className="paragraph Footer_nav_link">Help Center</p>
          </div>
        </div>
      </div>

      <div className="text">
        <hr />
        <FontAwesomeIcon
          icon={faCopyright}
          style={{ color: "#ffffff", marginRight: "5px" }}
        />
        <span className="paragraph">2025 studysmart. Made with </span>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#ff0000", margin: "0 5px" }}
        />
        <span className="paragraph">for students everywhere.</span>
      </div>
    </footer>
  );
}

export default Footer;
