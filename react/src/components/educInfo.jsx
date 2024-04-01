import { useState } from "react";
import InputField from "./input";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

function Education({ updateEducation }) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [educationEntries, setEducationEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name, value) => {
    setEducationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducationEntries = [...educationEntries, educationData];
    setEducationEntries(newEducationEntries);
    setEducationData({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    updateEducation(newEducationEntries);
  };

  const handleEdit = (entry) => {
    setEducationData(entry);
    setSelectedEntry(entry);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEntries = educationEntries.map((entry) =>
      entry === selectedEntry ? educationData : entry
    );
    setEducationEntries(updatedEntries);
    setEducationData({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setSelectedEntry(null);
    updateEducation(updatedEntries);
  };

  const handleDelete = (entry) => {
    const updatedEntries = educationEntries.filter((item) => item !== entry);
    setEducationEntries(updatedEntries);
    setSelectedEntry(null);
    updateEducation(updatedEntries);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="educContainer">
      <form onSubmit={selectedEntry ? handleUpdate : handleSubmit}>
        <div className="educInfo">
          <h1>{selectedEntry ? "Edit Education" : "Education"}</h1>
          <InputField
            label="School"
            type="text"
            name="school"
            value={educationData.school}
            onChange={handleChange}
          />
          <InputField
            label="Degree"
            type="text"
            name="degree"
            value={educationData.degree}
            onChange={handleChange}
          />
          <div className="educationDate">
            <InputField
              label="Start Date"
              type="text"
              name="startDate"
              value={educationData.startDate}
              onChange={handleChange}
            />
            <InputField
              label="End Date"
              type="text"
              name="endDate"
              value={educationData.endDate}
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Location"
            type="text"
            name="location"
            value={educationData.location}
            onChange={handleChange}
          />
          <button type="submit">{selectedEntry ? "Update" : "Submit"}</button>
        </div>
      </form>
      <div className="dropdownMenu">
        <div className="dropdownHeader" onClick={toggleDropDown}>
          <h3>Education</h3>
          <span className="chevronIcon">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="dropdownContent">
            {educationEntries.map((entry, index) => (
              <div key={index} className="educationEntry">
                <div className="educationContent">
                  <h4> {entry.school}</h4>
                  <p> {entry.degree}</p>
                </div>
                <div className="buttonContainer">
                  <button onClick={() => handleEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Education;
