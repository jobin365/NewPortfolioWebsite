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
import { v4 as uuidv4 } from "uuid";
function App() {
  const skills = [
    ["React", reactLogo],
    ["MongoDB", mongoLogo],
    ["Express", expressLogo],
    ["Git", GitLogo],
    ["JavaScript", JSLogo],
    ["HTML & CSS", htmlNcssLogo],
  ];
  return (
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
    </div>
  );
}

export default App;
