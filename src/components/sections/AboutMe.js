import { Fragment } from "react";
import TypingAnimation from "../TypingAnimation";

const bio_ = ` <p>
<strong>Hello! I’m Abhijeet Jadhav</strong>, 
a Full Stack Web Developer and Design Technologist based in Krakow, Poland.
I have a strong background in ReactJS, Angular, and JavaScript, Typescript and have worked across finance and e-learning domains.
Skilled in both front and back-end technologies, I’m always eager to explore new challenges, especially in immersive tech like AR/VR.
<br>Let’s team up to build something great!</br>
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          Hello, I'm <span className="first-word"><TypingAnimation /></span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 24
                </li>
                <li>
                  <strong>Residence . . . . .</strong> USA
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> London, UK
                </li>
              </ul>
            </div>
          </div> */}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">About Me</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
              I am Abhijeet Jadhav, web designer from USA, California. I have rich
              experience in web site design and building and customization, also
              I am good at wordpress. I love to talk with you about our unique.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 24
              </li>
              <li>
                <strong>Residence . . . . .</strong> USA
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
              <li>
                <strong>Address . . . . .</strong> California, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
