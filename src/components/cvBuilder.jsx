import { useState } from "react";
import Personal from "../components/personalInfo.jsx";
import Education from "../components/educInfo.jsx";
import Career from "../components/workInfo.jsx";
import ContactInfo from "./icon.jsx";

function CVBuilder() {
  const [cvData, setCVData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    education: [],
    career: [],
  });

  const updatePersonalInfo = (newPersonalInfo) => {
    setCVData((prevData) => ({
      ...prevData,
      personalInfo: newPersonalInfo,
    }));
  };

  const updateEducation = (newEducation) => {
    setCVData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  const updateCareer = (newCareer) => {
    setCVData((prevData) => ({
      ...prevData,
      career: newCareer,
    }));
  };

  return (
    <>
      <div className="forms">
        <Personal
          personalInfo={cvData.personalInfo}
          updatePersonalInfo={updatePersonalInfo}
        />
        <Education updateEducation={updateEducation} />
        <Career updateCareer={updateCareer} />
      </div>

      <div className="cvData">
        <div className="personalContainer">
          <h1>{cvData.personalInfo.name}</h1>
          <div className="contactInfo">
            <ContactInfo
              email={cvData.personalInfo.email}
              phoneNumber={cvData.personalInfo.phoneNumber}
              address={cvData.personalInfo.address}
            />
          </div>
        </div>
        <div className="cvContent">
          <div className="educContent">
            <h2>Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="cvDetails">
                <div className="dateLocation">
                  <p>
                    {edu.startDate} - {edu.endDate}{" "}
                  </p>
                  <p>{edu.location}</p>
                </div>
                <div className="schoolDegree">
                  <h4>{edu.school}</h4>
                  <p>{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="careerContent">
            <h2>Career</h2>
            {cvData.career.map((job, index) => (
              <div key={index} className="cvDetails">
                <div className="dateLocation">
                  <p>
                    {job.startDate} - {job.endDate}
                  </p>
                  <p>{job.location}</p>
                </div>
                <div className="companyDetails">
                  <h4>{job.company}</h4>
                  <p>{job.position}</p>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CVBuilder;
