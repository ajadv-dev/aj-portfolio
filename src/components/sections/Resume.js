import { Fragment, useState } from "react";

const resumeSectionData_ = {
  resumeData : [
    {
      date : 'Feb 2020 - Present',
      name: 'Design Technologist II',
      company: 'frog designs Inc 123',
      active: true,
      description: 'Monitored technical aspects of the front-end delivery for several projects.'
    },
    {
      date : 'Jul 2018 - Feb 2020',
      name: 'Senior Software Engineer',
      company: 'Larsen & Toubro Infotech Ltd (LTI)',
      active: false,
      description: 'Monitored technical aspects of the front-end delivery for several projects.'
    },
    {
      date : 'Mar 2017 - May 2018',
      name: 'Associate Consultant',
      company: 'Capgemini',
      active: false,
      description: 'Monitored technical aspects of the front-end delivery for several projects.'
    },
    {
      date : 'Nov 2015 - Mar 2017',
      name: 'Software Engineer',
      company: 'Creative Skills',
      active: false,
      description: 'Monitored technical aspects of the front-end delivery for several projects.'
    },
    {
      date : 'Feb 2014 - Oct 2015',
      name: 'Software Engineer',
      company: 'Austere Technology Solutions',
      active: false,
      description: 'Monitored technical aspects of the front-end delivery for several projects.'
    }
  ],
  educationData : [
    {
      date : '2012 - 2013',
      name: 'C-DAC',
      place: 'C-DAC, Mumbai',
      active: false,
      description: "Post Graduate Diploma in Computer Application (PG-DAC)"
    },
    {
      date : '2009 - 2012',
      name: 'B.E in E&TC',
      place: 'North Maharashtra University',
      active: false,
      description: "Bachelor's Degree in Electronics & telecommunications"
    },
    {
      date : '2006 - 2009',
      name: 'Diploma in E&TC',
      place: 'Maharashtra State Board of Technical Education, Mumbai',
      active: false,
      description: "Diploma in Electronics & telecommunications"
    }
  ]
}

const ResumeSection = ({resumeSectionData}) => {
  
  const [resumeData, ] = useState(resumeSectionData ? resumeSectionData.resumeData : resumeSectionData_.resumeData);
  const [educationData, ] = useState(resumeSectionData ? resumeSectionData.educationData : resumeSectionData_.educationData);

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
