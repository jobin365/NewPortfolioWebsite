import "./App.css";
import dp from "./images/dp.png";
import GitLogo from "./images/git-min.png";
import JSLogo from "./images/js.png";
import htmlNcssLogo from "./images/html&css.png";
import reactLogo from "./images/react-min.png";
import mongoLogo from "./images/mongo-min.png";
import expressLogo from "./images/express-min.png";
import eclerx from "./images/eclerx-min.png";
import IconLink from "./components/IconLink";
import LogoAndName from "./components/LogoAndName";
import LPU from "./images/lpu-min.png";
import uoc from "./images/uoc.png";
import { v4 as uuidv4 } from "uuid";
import React from 'react';
function App() {
  const skills = [
    ["React", reactLogo],
    ["MongoDB", mongoLogo],
    ["Express", expressLogo],
    ["Git", GitLogo],
    ["JavaScript", JSLogo],
    ["HTML & CSS", htmlNcssLogo],
  ];
  const projects = [
    [
      "GetItDone ",
      "https://github.com/jobin365/GetItDone",
      "https://sleepy-ridge-02151.herokuapp.com/",
      [
        "A todo list application that allows you to maintain multiple lists of tasks",
        "Users can login or create an account with email and password or using Google",
        "Created using React, Express, MongoDB, MUI and Passport",
      ],
    ],
  ];
  return (
    <div className="topApp">
      <div className="App">
        <h1 className="heading">
          <i className="fas fa-user"></i> About
        </h1>
        
        <div className="about-top">
          <img alt="jobin" src={dp} className="dp"></img>
          <div className="about-inner">
            <h1 className="myName">Jobin John K</h1>
            <h3>EmailOps at eClerx</h3>
            <div className="links">
              <IconLink
                URL="https://github.com/jobin365"
                icon="fab fa-github fa-2x githubBlack"
              />
              <IconLink
                URL="https://www.linkedin.com/in/jobin-john-k-b8141b1ba/"
                icon="fab fa-linkedin fa-2x linkedinBlue"
              />
              <IconLink
                URL="https://www.hackerrank.com/jobinjohnk5"
                icon="fab fa-hackerrank fa-2x hackerrankGreen"
              />
              <IconLink
                URL="mailto:jobinjohnk5@gmail.com"
                icon="fas fa-envelope fa-2x gmailRed"
                noRightMargin="true"
              />
            </div>
          </div>
        </div>
        <div className="about">
          <p className="justifyText">
            Currently doing internship at eClerx and is getting trained on
            EmailOps and Salesforce Marketing Cloud. Has self made experience in
            full stack development. Checkout the GitHub page and portfolio
            website. Graduated with a degree in computer science and pursuing
            masters in computer application.
          </p>
        </div>
        <h1 className="heading">
          <i className="fas fa-bolt"></i> Skills
        </h1>
        <div className="skills">
          {skills.map((item) => {
            const [name, logo] = item;
            return <LogoAndName name={name} logoURL={logo} key={uuidv4()} />;
          })}
        </div>

        <h1 className="heading">
          <i className="fas fa-suitcase"></i> Experience
        </h1>
        <h2>Intern</h2>
        <LogoAndName name="eClerx" logoURL={eclerx} />
        <p>June 2022 - Present</p>
        <ul className="justifyText">
          <li>
            Currently undergoing training in emailops and salesforce marketing
            cloud
          </li>
        </ul>

        <h1 className="heading">
          <i className="fas fa-code"></i> Projects
        </h1>
        {projects.map((item) => {
          const [name, gitHubURL, hostedURL, description] = item;
          return (
            <div key={uuidv4()}>
              <h2>
                {name}
                <IconLink
                  URL={gitHubURL}
                  icon="fab fa-github fa-lg githubBlack"
                  yesLeftMargin="true"
                />
                <IconLink
                  URL={hostedURL}
                  icon={"fas fa-external-link-alt link-blue"}
                />
              </h2>
              <ul className="justifyText">
                {description.map((item) => {
                  return <li key={uuidv4()}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}

        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> Education
        </h1>
        <h2>Master of Computer Applications</h2>
        <LogoAndName name="Lovely Professional University" logoURL={LPU} />
        <p>2021 - 2023</p>
        <h2>Bachelor of Science in Computer Science</h2>
        <LogoAndName name="University of Calicut" logoURL={uoc} />
        <p>2018 - 2021</p>
      </div>
    </div>
  );
}

export default App;
