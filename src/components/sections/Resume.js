import { Fragment, useState } from "react";

const ResumeSection = ({data}) => {
  
  const [resumeData, ] = useState(data.resumeData);
  const [educationData, ] = useState(data.educationData);

  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            
            <div className="resume-items">
              {resumeData && (
                resumeData.map((item) => {
                  return (
                    <div className={item.active ? "resume-item border-line-h active" : "resume-item border-line-h"}>
                      <div className="date">{item.date}</div>
                      <div className="name">{item.name}</div>
                      <div className="company">{item.company}</div>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            
            <div className="resume-items">
            {educationData && (
                educationData.map((item) => {
                  return (
                    <div className="resume-item border-line-h">
                      <div className="date">{item.date}</div>
                      <div className="name">{item.name}</div>
                      <div className="company">{item.place}</div>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default ResumeSection;
