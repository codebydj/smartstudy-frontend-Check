import React from "react";
import DataCard from "../components/DataCard";
import HeaderLogo from "../assets/smartstudy-header.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <img src={HeaderLogo} alt="SmartStudy Logo" className="header-logo" />
      <DataCard />
      <div className="lastUpdated">Last Updated: 17-9-2025</div>
    </div>
  );
}
