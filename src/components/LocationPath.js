// src/components/LocationPath.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";
import "../styles/LocationPath.css";

function LocationPath({ paths = [] }) {
  return (
    <div className="locationPath">
      {/* Home icon always links to root */}
      <Link to="/">
        <img src={home} alt="Home" className="home-icon" />
      </Link>

      {/* Breadcrumbs */}
      {paths?.map((path, index) => (
        <span key={index}>
          {" "}
          &gt;{" "}
          {path.link ? (
            <Link to={path.link}>{path.name}</Link>
          ) : (
            <span>{path.name}</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ✅ PropTypes validation (warns in dev mode if props are wrong)
LocationPath.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string, // optional
    })
  ),
};

export default LocationPath;
