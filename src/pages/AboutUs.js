import React from "react";
import "../styles/AboutUs.css";

export default function About() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Smartstudy</h1>
        <p className="subtitle">
          smartstudy is mare than just anotes-shareing platform. We are a
          dedicated committee of educators,students,and technologists working
          together to revolutionize how students access and share educational
          resources
        </p>
      </header>
      <section className="info-section">
        <div className="info-card">
          <h3>Our Mission</h3>
          <p>
            to create a comprehensive digital platform that facilitates seamless
            sharing and access to quality educational resources foe all students
          </p>
        </div>
        <div className="info-card">
          <h3>Our Vision</h3>
          <p>
            To empower students with collaborative learning tools and build a
            supportive academic community where boundaries are transcended.
          </p>
        </div>
        <div className="info-card">
          <h3>Our Values</h3>
          <p>
            Excellence in education, collaboration, accessibility, innovation,
            and commitment to helping students succeed in their academic
            journey.
          </p>
        </div>
      </section>
      <section className="core-section">
        <h2 style={{ color: "black" }}>Our Core Committee</h2>
        <p className="core-desicion subtitle">
          Meet the dedicated individuals whi make SmartStudy pooible through
          their expertise,passion,and commitment to educational excellence.
        </p>
        <div className="committee-flex">
          <div className="committee-card">
            <img src="https://i.ibb.co/LDNmw3Cc/User-icon.png" alt="user1" />
            <span>Project Lead</span>
            <div className="UserName">Dhanunjaya (DJ)</div>
            <p className="committee-card-userQualification">
              Computer Science Department
            </p>
            <p className="committee-card-userDescription">
              Leading the SmartStudy project as the Project Lead, with strong
              focus on project implementation and feature development. Skilled
              in basic to medium-level programming and passionate about web
              development ideas that bring real value to students.
            </p>
            <p className="email">dhanunjaya@gamil.com</p>
          </div>
          <div className="committee-card">
            <img src="https://i.ibb.co/LDNmw3Cc/User-icon.png" alt="user2" />
            <span>Supportive Web Developer</span>
            <div className="UserName">Charan</div>
            <p className="committee-card-userQualification">
              Computer Science Department
            </p>
            <p className="committee-card-userDescription">
              An enthusiastic coder and supportive web developer, always
              exploring new technologies and contributing to the growth of the
              project. Dedicated to building useful solutions that help students
              collaborate effectively.
            </p>
            <p className="email">charan@gmail.com</p>
          </div>
          <div className="committee-card">
            <img src="https://i.ibb.co/LDNmw3Cc/User-icon.png" alt="user3" />
            <span>Web Developer & Idea Contributor</span>
            <div className="UserName">Praveen</div>
            <p className="committee-card-userQualification">
              Computer Science Department
            </p>
            <p className="committee-card-userDescription">
              The original idea behind SmartStudy, serving as a web developer
              and creative contributor. Focused on designing impactful features
              and ensuring the project remains innovative and student-friendly.
            </p>
            <p className="email">praveen@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="commitment-section">
        <h2>Our Commitment</h2>
        <p>
          At SmartStudy, we believe that knowledge should be accessible to
          everyone. Our committee works tirelessly to ensure that every student
          has access to high-quality educational resources, regardless of their
          background or circumstances.
        </p>
        <div className="stats-row">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Students Served</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>notes sharing</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Subjects Covered</p>
          </div>
        </div>
      </section>
    </div>
  );
}
