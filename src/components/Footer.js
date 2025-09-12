import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faBook,
  faList,
  faUser,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faCopyright,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

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
              icon={faUser}
              style={{ color: "#6bbe66", marginRight: "5px" }}
            />
            <span className="paragraph userList">DJ , Charan , Praveen</span>
          </div>
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
            <span className="paragraph">+919876543210</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ff0000", marginRight: "5px" }}
            />
            <span className="paragraph">MVR r23 cse-c students</span>
          </div>
        </div>

        <div>
          <h1 className="heading">Quick Links</h1>
          <div className="QuickLink">
            <Link to="/" className="paragraph Footer_nav_link">
              {" "}
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ color: "#6bbe66", marginRight: "5px" }}
              />
              About Us
            </Link>
            <Link to="/" className="paragraph Footer_nav_link">
              {" "}
              <FontAwesomeIcon
                icon={faBook}
                style={{ color: "#0000ff", marginRight: "5px" }}
              />
              Privacy Policy
            </Link>
            <Link to="/" className="paragraph Footer_nav_link">
              <FontAwesomeIcon
                icon={faList}
                style={{ color: "#ff4141", marginRight: "5px" }}
              />
              Terms of Service
            </Link>
            <Link to="/" className="paragraph Footer_nav_link">
              <FontAwesomeIcon
                icon={faInbox}
                style={{ color: "#ed722e", marginRight: "5px" }}
              />
              Help Center
            </Link>
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
