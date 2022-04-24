import React from "react";
import resumeData from "../resumeData";

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profile.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>
        </div>
      </div>
    </section>
  );
}
